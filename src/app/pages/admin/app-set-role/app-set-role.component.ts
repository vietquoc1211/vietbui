import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DataService } from '../../../_services/data.service';
import { DialogService } from '../../../_services/dialog.service';
import { BehaviorSubject } from 'rxjs';
import { PageMenuNode, PageMenuFlatNode } from '../../../_interfaces/PageMenuNode';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  templateUrl: "./app-set-role.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppSetRoleComponent {
  public isLoading = false;
  private API = '/api/AppRoleFunction';
  issave:boolean=false;
  rolelist = [];
  rolecontrol = new FormControl('', [Validators.required]);
  pagelist = [];
  nodeexpand: number[] = [];
  checklist: any[] = [];
  flatNodeMap = new Map<PageMenuFlatNode, PageMenuNode>();
  nestedNodeMap = new Map<PageMenuNode, PageMenuFlatNode>();
  selectedParent: PageMenuFlatNode | null = null;
  newItemName = '';
  treeControl: FlatTreeControl<PageMenuFlatNode>;
  treeFlattener: MatTreeFlattener<PageMenuNode, PageMenuFlatNode>;
  dataSource: MatTreeFlatDataSource<PageMenuNode, PageMenuFlatNode>;
  checklistSelection = new SelectionModel<PageMenuFlatNode>(true);
  constructor(public _data: DataService, private _dialog: DialogService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<PageMenuFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.loadrole();
    this.loadpage();
  }
  loadrole() {
    this.isLoading = true;
    this._data.get('/api/AppRoles/getallactive')
      .subscribe((res: any) => {
        this.rolelist = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  loadpage() {
    this.isLoading = true;
    this._data.get(this.API + '/getpageandfunctionbyrole' + (this.rolecontrol.invalid ? '' : ('/' + this.rolecontrol.value)))
      .subscribe((res: any) => {
        this.pagelist = res;
        this.checklist=[];
        this.pagelist[0].Roles.forEach(item => {
          this.checklist.push({
            Role: item.AcctionName,
            Data: new SelectionModel<PageMenuFlatNode>(true)
          });
        });
        this.dataSource.data = this.build_data(res, null);
        this.treeControl.dataNodes.forEach(s => {
          if (this.nodeexpand.filter(t => t == s.AppPageID).length > 0)
            this.treeControl.expand(s);
        });
        this.treeControl.expandAll();
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  loaddata() {
    if (this.rolecontrol.invalid)
      return;
    this.loadpage();
  }
  savedata()
  {
    if (this.rolecontrol.invalid)
    return;
    let formdata={
      RoleId:this.rolecontrol.value,
      Data:[]
    };
    this.checklist.forEach(item=>{
      if(item.Data&&item.Data._selection)
      item.Data._selection.forEach(role=>{
        if(role.AppPageFunctionID||(role.AppPageID&&role.Section))
        {
          formdata.Data.push({
            AcctionName:item.Role,
            AppPageID:role.AppPageID,
            AppPageFunctionID:role.AppPageFunctionID,
          });
        }
      })
    });
    this.issave=true;
    this._data.post(this.API + '/savepageandfunctionbyrole', formdata)
      .subscribe((res: any) => {
        this.issave = false;
        this._data.toastr_save_success(false);
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
  build_data(data: any[], parent) {
    let result = [];
    data.filter(s => s.Parent == parent).forEach(s => {
      let item = { ...s };
      item.children = this.build_data(data, s.AppPageID)
      if (item.children && item.children.length == 0 && item.Functions && item.Functions.length > 0) {
        item.Functions.forEach(f => {
          if (f.AppFunctionID) {
            item.children.push({
              AppPageFunctionID: f.AppPageFunctionID,
              FunctionID: f.AppFunctionID,
              FunctionName: f.FunctionName,
              Roles: f.Roles
            });
          }

        })
      }
      result.push(item);
    });
    return result;
  }
  getLevel = (node: PageMenuFlatNode) => node.level;

  isExpandable = (node: PageMenuFlatNode) => node.expandable;

  getChildren = (node: PageMenuNode): PageMenuNode[] => node.children;

  hasChild = (_: number, _nodeData: PageMenuFlatNode) => _nodeData.expandable;

  transformer = (node: PageMenuNode, level: number) => {
    const flatNode = new PageMenuFlatNode();
    flatNode.AppPageID = node.AppPageID;
    flatNode.Parent = node.Parent;
    flatNode.Name = node.Name;
    flatNode.Url = node.Url;
    flatNode.Icon = node.Icon;
    flatNode.Hide = node.Hide;
    flatNode.Section = node.Section;
    flatNode.level = level;
    flatNode.expandable = node.children ? node.children.length > 0 : false;
    flatNode.isExpanded = true;
    flatNode.FunctionID = node.FunctionID;
    flatNode.FunctionName = node.FunctionName;
    flatNode.AppPageFunctionID=node.AppPageFunctionID;
    flatNode.Roles = node.Roles;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    node.Roles.forEach(item => {
      let list = this.checklist.find(s => s.Role == item.AcctionName).Data;
      if (item.Check)
        list.select(flatNode);
    })
    return flatNode;
  }
  toggleNode(node: PageMenuFlatNode) {
    if (this.treeControl.isExpanded(node))
      this.nodeexpand.push(node.AppPageID);
    else
      this.nodeexpand.splice(this.nodeexpand.findIndex(s => s == node.AppPageID), 1);
  }

  sttcheck(node: PageMenuFlatNode, role: string): boolean {
    if (isNullOrUndefined(role))
      return;
    return this.checklist.find(s => s.Role == role).Data.isSelected(node);
  }
  eventcheck(node: PageMenuFlatNode, role: string) {
    if (isNullOrUndefined(role))
      return;
    this.checklist.find(s => s.Role == role).Data.toggle(node);
  }
  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: PageMenuFlatNode, role: string): boolean {
    if (isNullOrUndefined(role))
      return;
    try {
      let list = this.checklist.find(s => s.Role == role).Data;
      const descendants = this.treeControl.getDescendants(node);
      return descendants.every(child => list.isSelected(child));
    }
    catch{ }
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: PageMenuFlatNode, role: string): boolean {
    if (isNullOrUndefined(role))
      return;
    try {
      let list = this.checklist.find(s => s.Role == role).Data;
      const descendants = this.treeControl.getDescendants(node);
      const result = descendants.some(child => list.isSelected(child));
      return result && !this.descendantsAllSelected(node, role);
    }
    catch{ }
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: PageMenuFlatNode, role: string): void {
    if (isNullOrUndefined(role))
      return;
    let list = this.checklist.find(s => s.Role == role).Data;
    list.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    list.isSelected(node) ? list.select(...descendants)
      : list.deselect(...descendants);
  }

}
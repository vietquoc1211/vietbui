import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DataService } from '../../../_services/data.service';
import { DialogService } from '../../../_services/dialog.service';
import { BehaviorSubject } from 'rxjs';
import { AppPageCreateComponent } from './app-page-create/app-page-create.component';
import { PageMenuNode,PageMenuFlatNode } from '../../../_Interfaces/PageMenuNode';

@Component({
  templateUrl: "./app-page.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppPageComponent {
  public isLoading = false;
  private API = '/api/AppPage';
  nodeexpand: number[] = [];
  nestedNodeMap = new Map<PageMenuNode, PageMenuFlatNode>();
  selectedParent: PageMenuFlatNode | null = null;
  newItemName = '';
  treeControl: FlatTreeControl<PageMenuFlatNode>;
  treeFlattener: MatTreeFlattener<PageMenuNode, PageMenuFlatNode>;
  dataSource: MatTreeFlatDataSource<PageMenuNode, PageMenuFlatNode>;
  constructor(public _data: DataService, private _dialog: DialogService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<PageMenuFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.loaddata();
  }
  loaddata() {
    this.isLoading = true;
    this._data.get(this.API + '/getall')
      .subscribe((res: any) => {
        this.dataSource.data = this.build_data(res, null);
        this.treeControl.dataNodes.forEach(s => {
          if (this.nodeexpand.filter(t => t == s.AppPageID).length > 0)
            this.treeControl.expand(s);
        })
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  build_data(data: any[], parent) {
    let result = [];
    data.filter(s => s.Parent == parent).forEach(s => {
      let item = { ...s };
      item.children = this.build_data(data, s.AppPageID)
      result.push(item);
    });
    return result;
  }
  opendialog(id: any = null, parent: any = null) {
    this._dialog.open_dialog_create(AppPageCreateComponent, { Id: id, Parent: parent }, () => this.loaddata());
    if (parent) {
      this.treeControl.expand(parent);
    }
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa trang ' + item.Name }, () => {
      this._data.post(this.API + '/delete/' + item.AppPageID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    })
  }
  move(id, moveup: boolean = null) {
    this._data.post(this.API + (moveup ? '/moveup/' : '/movedown/') + id)
      .subscribe((res: any) => {
        this.loaddata();
      }, (error) => {
        this._data.handleError(error);
      });
  }
  getLevel = (node: PageMenuFlatNode) => node.level;

  isExpandable = (node: PageMenuFlatNode) => node.expandable;

  getChildren = (node: PageMenuNode): PageMenuNode[] => node.children;

  hasChild = (_: number, _nodeData: PageMenuFlatNode) => _nodeData.expandable;

  transformer = (node: PageMenuNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.Name === node.Name
      ? existingNode
      : new PageMenuFlatNode();
    flatNode.AppPageID = node.AppPageID;
    flatNode.Parent = node.Parent;
    flatNode.Name = node.Name;
    flatNode.Url = node.Url;
    flatNode.Icon = node.Icon;
    flatNode.Hide = node.Hide;
    flatNode.Section = node.Section;
    flatNode.level = level;
    flatNode.expandable = node.children.length > 0;
    flatNode.isExpanded = true;
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }
  toggleNode(node: PageMenuFlatNode) {
    if (this.treeControl.isExpanded(node))
      this.nodeexpand.push(node.AppPageID);
    else
      this.nodeexpand.splice(this.nodeexpand.findIndex(s => s == node.AppPageID), 1);
  }
}

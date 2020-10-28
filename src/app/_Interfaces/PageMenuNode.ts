export class PageMenuNode {
    children: PageMenuNode[];
    AppPageID: number;
    Parent: number;
    Name: any;
    Url: string;
    Icon: string;
    Hide: boolean;
    Section: boolean;
    FunctionID:number;
    FunctionName:string;
    level: number;
    AppPageFunctionID:number;
    Roles:any[];
  }
  export class PageMenuFlatNode {
    AppPageID: number;
    Parent: number;
    Name: any;
    Url: string;
    Icon: string;
    Hide: boolean;
    Section: boolean;
    level: number;
    expandable: boolean;
    isExpanded: boolean;
    FunctionID:number;
    FunctionName:string;
    AppPageFunctionID:number;
    Roles:any[];
  }
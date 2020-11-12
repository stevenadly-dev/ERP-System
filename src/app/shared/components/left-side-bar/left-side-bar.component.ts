import { TabsService } from './../../services/tabs.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Node for to-do item
 */
export class TreeItemNode {
  children: TreeItemNode[];
  item: string;
  code: string;
  isHeading?: boolean;
  icon?: string;
  r_link: string;
}

/** Flat to-do item node with expandable and level information */
export class TreeItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
  code: string;
  isHeading?: boolean;
  icon?: string;
  r_link: string;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = [
  {
    text: 'Finance',
    code: '0.1',
    r_link: 'finance',
    isHeading: true,
    icon: 'assets/icons/finance-icon.svg',
  },

  //********************************************************************common */

  { text: 'Common', code: '0.1.1', r_link: 'finance/common' },

  // -------------------company (11:13)
  { text: 'company', code: '0.1.1.1', r_link: 'finance/common/company' },
  {
    text: 'FIN011-Create',
    code: '0.1.1.1.1',
    r_link: 'finance/common/company/FIN011-Create',
  },
  {
    text: 'FIN012-Change',
    code: '0.1.1.1.2',
    r_link: 'finance/common/company/FIN012-Change',
  },
  {
    text: 'FIN013-View',
    code: '0.1.1.1.3',
    r_link: 'finance/common/company/FIN013-View',
  },
  // ------------------company transaction (21:23)
  {
    text: 'Company Transaction',
    code: '0.1.1.2',
    r_link: 'finance/common/company-transaction',
  },
  {
    text: 'FIN021-Create',
    code: '0.1.1.2.1',
    r_link: 'finance/common/company-transaction/FIN021-Create',
  },
  {
    text: 'FIN022-Change',
    code: '0.1.1.2.2',
    r_link: 'finance/common/company-transaction/FIN022-Change',
  },
  {
    text: 'FIN023-View',
    code: '0.1.1.2.3',
    r_link: 'finance/common/company-transaction/FIN023-View',
  },

  // ------------------division(31:33)
  {
    text: 'Division',
    code: '0.1.1.3',
    r_link: 'finance/common/division',
  },
  {
    text: 'FIN031-Create',
    code: '0.1.1.3.1',
    r_link: 'finance/common/division/FIN031-Create',
  },
  {
    text: 'FIN032-Change',
    code: '0.1.1.3.2',
    r_link: 'finance/common/division/FIN032-Change',
  },
  {
    text: 'FIN033-View',
    code: '0.1.1.3.3',
    r_link: 'finance/common/division/FIN033-View',
  },

  // ------------------department (41:43)
  {
    text: 'Department',
    code: '0.1.1.4',
    r_link: 'finance/common/department',
  },
  {
    text: 'FIN041-Create',
    code: '0.1.1.4.1',
    r_link: 'finance/common/department/FIN041-Create',
  },
  {
    text: 'FIN042-Change',
    code: '0.1.1.4.2',
    r_link: 'finance/common/department/FIN042-Change',
  },
  {
    text: 'FIN043-View',
    code: '0.1.1.4.3',
    r_link: 'finance/common/department/FIN043-View',
  },
  // ------------------ currency (51:53)
  {
    text: 'Currency',
    code: '0.1.1.5',
    r_link: 'finance/common/currency',
  },
  {
    text: 'FIN051-Create',
    code: '0.1.1.5.1',
    r_link: 'finance/common/currency/FIN051-Create',
  },
  {
    text: 'FIN052-Change',
    code: '0.1.1.5.2',
    r_link: 'finance/common/currency/FIN052-Change',
  },
  {
    text: 'FIN053-View',
    code: '0.1.1.5.3',
    r_link: 'finance/common/currency/FIN053-View',
  },

  // ------------------ Analysis (61:63)
  {
    text: 'Analysis',
    code: '0.1.1.6',
    r_link: 'finance/common/analysis',
  },
  {
    text: 'FIN061-Create',
    code: '0.1.1.6.1',
    r_link: 'finance/common/analysis/FIN061-Create',
  },
  {
    text: 'FIN062-Change',
    code: '0.1.1.6.2',
    r_link: 'finance/common/analysis/FIN062-Change',
  },
  {
    text: 'FIN063-View',
    code: '0.1.1.6.3',
    r_link: 'finance/common/analysis/FIN063-View',
  },

  // ------------------  Activites (71:73)
  {
    text: 'Activites',
    code: '0.1.1.7',
    r_link: 'finance/common/activity',
  },
  {
    text: 'FIN071-Create',
    code: '0.1.1.7.1',
    r_link: 'finance/common/activity/FIN071-Create',
  },
  {
    text: 'FIN072-Change',
    code: '0.1.1.7.2',
    r_link: 'finance/common/activity/FIN072-Change',
  },
  {
    text: 'FIN073-View',
    code: '0.1.1.7.3',
    r_link: 'finance/common/activity/FIN073-View',
  },

  // ------------------ Payment Terms (81:83)
  {
    text: 'Payment Terms',
    code: '0.1.1.8',
    r_link: 'finance/common/payment-terms',
  },
  {
    text: 'FIN081-Create',
    code: '0.1.1.8.1',
    r_link: 'finance/common/payment-terms/FIN081-Create',
  },
  {
    text: 'FIN082-Change',
    code: '0.1.1.8.2',
    r_link: 'finance/common/payment-terms/FIN082-Change',
  },
  {
    text: 'FIN083-View',
    code: '0.1.1.8.3',
    r_link: 'finance/common/payment-terms/FIN083-View',
  },

  // ------------------ EXPENSE (91:93)
  {
    text: 'EXPENSE',
    code: '0.1.1.9',
    r_link: 'finance/common/expense',
  },
  {
    text: 'FIN091-Create',
    code: '0.1.1.9.1',
    r_link: 'finance/common/expense/FIN091-Create',
  },
  {
    text: 'FIN092-Change',
    code: '0.1.1.9.2',
    r_link: 'finance/common/expense/FIN092-Change',
  },
  {
    text: 'FIN093-View',
    code: '0.1.1.9.3',
    r_link: 'finance/common/expense/FIN093-View',
  },

  // ------------------ DISCOUNT (101:103)
  {
    text: 'DISCOUNT',
    code: '0.1.1.10',
    r_link: 'finance/common/discount',
  },
  {
    text: 'FIN0101-Create',
    code: '0.1.1.10.1',
    r_link: 'finance/common/discount/FIN091-Create',
  },
  {
    text: 'FIN0102-Change',
    code: '0.1.1.10.2',
    r_link: 'finance/common/discount/FIN092-Change',
  },
  {
    text: 'FIN0103-View',
    code: '0.1.1.10.3',
    r_link: 'finance/common/discount/FIN093-View',
  },

  //********************************************************************General Ledger */

  { text: 'General Ledger', code: '0.1.2', r_link: 'finance/general-ledger' },

  // -------------------Chart Of account Category (111 :113)
  {
    text: 'Chart Of account Category',
    code: '0.1.2.1',
    r_link: 'finance/general-ledger/chart-of-account-category',
  },
  {
    text: 'FIN111-Create',
    code: '0.1.2.1.1',
    r_link: 'finance/general-ledger/chart-of-account-category/FIN111-Create',
  },
  {
    text: 'FIN112-Change',
    code: '0.1.2.1.2',
    r_link: 'finance/general-ledger/chart-of-account-category/FIN0112-Change',
  },
  {
    text: 'FIN113-View',
    code: '0.1.2.1.3',
    r_link: 'finance/general-ledger/chart-of-account-category/FIN0113-View',
  },

  // ------------------- Chart Of account (121 :123)
  {
    text: 'Chart Of account',
    code: '0.1.2.2',
    r_link: 'finance/general-ledger/chart-of-account',
  },
  {
    text: 'FIN121-Create',
    code: '0.1.2.2.1',
    r_link: 'finance/general-ledger/chart-of-account/FIN121-Create',
  },
  {
    text: 'FIN122-Change',
    code: '0.1.2.2.2',
    r_link: 'finance/general-ledger/chart-of-account/FIN0122-Change',
  },
  {
    text: 'FIN123-View',
    code: '0.1.2.2.3',
    r_link: 'finance/general-ledger/chart-of-account/FIN0123-View',
  },

  // -------------------  Sub-Chart Of account (131 :133)
  {
    text: 'Sub Chart Of account',
    code: '0.1.2.3',
    r_link: 'finance/general-ledger/sub-chart-of-account',
  },
  {
    text: 'FIN131-Create',
    code: '0.1.2.3.1',
    r_link: 'finance/general-ledger/sub-chart-of-account/FIN131-Create',
  },
  {
    text: 'FIN0132-Change',
    code: '0.1.2.3.2',
    r_link: 'finance/general-ledger/sub-chart-of-account/FIN0132-Change',
  },
  {
    text: 'FIN0133-View',
    code: '0.1.2.3.3',
    r_link: 'finance/general-ledger/sub-chart-of-account/FIN0133-View',
  },
  // -------------------  Journal Voucher (141 :143)
  {
    text: 'Journal Voucher',
    code: '0.1.2.4',
    r_link: 'finance/general-ledger/journal-voucher',
  },
  {
    text: 'FIN141-Create',
    code: '0.1.2.4.1',
    r_link: 'finance/general-ledger/journal-voucher/FIN141-Create',
  },
  {
    text: 'FIN0142-Change',
    code: '0.1.2.4.2',
    r_link: 'finance/general-ledger/journal-voucher/FIN0142-Change',
  },
  {
    text: 'FIN0143-View',
    code: '0.1.2.4.3',
    r_link: 'finance/general-ledger/journal-voucher/FIN0143-View',
  },
  // -------------------  correction Voucher (151 :153)
  {
    text: 'correction Voucher',
    code: '0.1.2.5',
    r_link: 'finance/general-ledger/correction-voucher',
  },
  {
    text: 'FIN151-Create',
    code: '0.1.2.5.1',
    r_link: 'finance/general-ledger/correction-voucher/FIN151-Create',
  },
  {
    text: 'FIN0152-Change',
    code: '0.1.2.5.2',
    r_link: 'finance/general-ledger/correction-voucher/FIN0152-Change',
  },
  {
    text: 'FIN0153-View',
    code: '0.1.2.5.3',
    r_link: 'finance/general-ledger/correction-voucher/FIN0153-View',
  },
  // -------------------  Revesal Voucher (151 :153)
  {
    text: 'Revesal Voucher',
    code: '0.1.2.6',
    r_link: 'finance/general-ledger/reversal-voucher',
  },
  {
    text: 'FIN151-Create',
    code: '0.1.2.6.1',
    r_link: 'finance/general-ledger/reversal-voucher/FIN151-Create',
  },
  {
    text: 'FIN0152-Change',
    code: '0.1.2.6.2',
    r_link: 'finance/general-ledger/reversal-voucher/FIN0152-Change',
  },
  {
    text: 'FIN0153-View',
    code: '0.1.2.6.3',
    r_link: 'finance/general-ledger/reversal-voucher/FIN0153-View',
  },


  //*************************** Cash Management ******************************************/
  { text: 'Cash Mangement', code: '0.1.3', r_link: 'finance/cash-mangement' },

  // -------------------Cash Box (161 :163)
  {
    text: 'Cash Box',
    code: '0.1.3.1',
    r_link: 'finance/cash-mangement/cash-box',
  },
  {
    text: 'FIN161-Create',
    code: '0.1.3.1.1',
    r_link: 'finance/cash-mangement/cash-box/FIN161-Create',
  },
  {
    text: 'FIN162-Change',
    code: '0.1.3.1.2',
    r_link: 'finance/cash-mangement/cash-box/FIN0162-Change',
  },
  {
    text: 'FIN163-View',
    code: '0.1.3.1.3',
    r_link: 'finance/cash-mangement/cash-box/FIN0163-View',
  },

  // -------------------petty-cash-initialization (171 :173)
  {
    text: 'Petty Cash-Initialization',
    code: '0.1.3.2',
    r_link: 'finance/cash-mangement/petty-cash-initialization',
  },
  {
    text: 'FIN171-Create',
    code: '0.1.3.2.1',
    r_link: 'finance/cash-mangement/petty-cash-initialization/FIN171-Create',
  },
  {
    text: 'FIN172-Change',
    code: '0.1.3.2.2',
    r_link: 'finance/cash-mangement/petty-cash-initialization/FIN0172-Change',
  },
  {
    text: 'FIN173-View',
    code: '0.1.3.2.3',
    r_link: 'finance/cash-mangement/petty-cash-initialization/FIN0173-View',
  },

  // -------------------petty-cash-disbursement (181 :183)
  {
    text: 'Petty Cash-Disbursement',
    code: '0.1.3.3',
    r_link: 'finance/cash-mangement/petty-cash-disbursement',
  },
  {
    text: 'FIN181-Create',
    code: '0.1.3.3.1',
    r_link: 'finance/cash-mangement/petty-cash-disbursement/FIN181-Create',
  },
  {
    text: 'FIN182-Change',
    code: '0.1.3.3.2',
    r_link: 'finance/cash-mangement/petty-cash-disbursement/FIN0182-Change',
  },
  {
    text: 'FIN183-View',
    code: '0.1.3.3.3',
    r_link: 'finance/cash-mangement/petty-cash-disbursement/FIN0183-View',
  },

  // -------------------petty-cash-reimbursement (191 :193)
  {
    text: 'Petty Cash-Reimbursement',
    code: '0.1.3.4',
    r_link: 'finance/cash-mangement/petty-cash-reimbursement',
  },
  {
    text: 'FIN191-Create',
    code: '0.1.3.4.1',
    r_link: 'finance/cash-mangement/petty-cash-reimbursement/FIN191-Create',
  },
  {
    text: 'FIN192-Change',
    code: '0.1.3.4.2',
    r_link: 'finance/cash-mangement/petty-cash-reimbursement/FIN0192-Change',
  },
  {
    text: 'FIN193-View',
    code: '0.1.3.4.3',
    r_link: 'finance/cash-mangement/petty-cash-reimbursement/FIN0193-View',
  },

  //*************************** Payable ******************************************/
  { text: 'Payable', code: '0.1.4', r_link: 'finance/payable' },

  // -------------------Supplier (201 :203)
  {
    text: 'Supplier',
    code: '0.1.4.1',
    r_link: 'finance/payable/supplier',
  },
  {
    text: 'FIN201-Create',
    code: '0.1.4.1.1',
    r_link: 'finance/payable/supplier/FIN201-Create',
  },
  {
    text: 'FIN202-Change',
    code: '0.1.4.1.2',
    r_link: 'finance/payable/supplier/FIN0202-Change',
  },
  {
    text: 'FIN203-View',
    code: '0.1.4.1.3',
    r_link: 'finance/payable/supplier/FIN0203-View',
  },

  // -------------------Manual Supplier Invoice (211 :213)
  {
    text: 'Manual Supplier Invoice',
    code: '0.1.4.2',
    r_link: 'finance/payable/manual-supplier-invoice',
  },
  {
    text: 'FIN211-Create',
    code: '0.1.4.2.1',
    r_link: 'finance/payable/manual-supplier-invoice/FIN211-Create',
  },
  {
    text: 'FIN212-Change',
    code: '0.1.4.2.2',
    r_link: 'finance/payable/manual-supplier-invoice/FIN0212-Change',
  },
  {
    text: 'FIN213-View',
    code: '0.1.4.2.3',
    r_link: 'finance/payable/manual-supplier-invoice/FIN0213-View',
  },
  // ==========================================================================Adminstrator
  {
    text: 'Administrator',
    code: '0.2',
    r_link: 'administrator',
    isHeading: true,
    icon: 'assets/icons/user.svg',
  },
  // ======================groups-roles
  { text: 'Groups/roles', code: '0.2.1', r_link: '' },
  { text: 'ADM***-Create', code: '0.2.1.1', r_link: 'administrator/groups-roles' },
  { text: 'ADM***-Change', code: '0.2.1.2', r_link: '' },
  { text: 'ADM***-view', code: '0.2.1.3', r_link: '' },



  // ======================users
  { text: 'Users', code: '0.2.2', r_link: '' },
  { text: 'ADM***-Create', code: '0.2.2.1', r_link: 'administrator/users' },
  { text: 'ADM***-Change', code: '0.2.2.2', r_link: '' },
  { text: 'ADM***-view', code: '0.2.2.3', r_link: '' },
];

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TreeItemNode[]>([]);
  treeData: any[];
  get data(): TreeItemNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    this.treeData = TREE_DATA;
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, '0');
    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */

  buildFileTree(obj: any[], level: string): TreeItemNode[] {
    return obj
      .filter(
        (o) =>
          (<string>o.code).startsWith(level + '.') &&
          (o.code.match(/\./g) || []).length ===
          (level.match(/\./g) || []).length + 1
      )
      .map((o) => {
        const node = new TreeItemNode();
        node.item = o.text;
        node.code = o.code;
        node.r_link = o.r_link;
        node.isHeading = o.isHeading;
        node.icon = o.icon;
        const children = obj.filter((so) =>
          (<string>so.code).startsWith(level + '.')
        );
        if (children && children.length > 0) {
          node.children = this.buildFileTree(children, o.code);
        }
        return node;
      });
  }

  public filter(filterText: string) {
    let filteredTreeData;
    if (filterText) {
      console.log(this.treeData);
      filteredTreeData = this.treeData.filter(
        (d) =>
          d.text.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >
          -1
      );
      Object.assign([], filteredTreeData).forEach((ftd) => {
        let str = <string>ftd.code;
        while (str.lastIndexOf('.') > -1) {
          const index = str.lastIndexOf('.');
          str = str.substring(0, index);
          if (filteredTreeData.findIndex((t) => t.code === str) === -1) {
            const obj = this.treeData.find((d) => d.code === str);
            if (obj) {
              filteredTreeData.push(obj);
            }
          }
        }
      });
    } else {
      filteredTreeData = this.treeData;
    }

    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    // file node as children.
    const data = this.buildFileTree(filteredTreeData, '0');
    // Notify the change.
    this.dataChange.next(data);
  }
}

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
  providers: [ChecklistDatabase],
})
export class LeftSideBarComponent {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TreeItemFlatNode, TreeItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TreeItemNode, TreeItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TreeItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TreeItemFlatNode>;

  treeFlattener: MatTreeFlattener<TreeItemNode, TreeItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TreeItemNode, TreeItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TreeItemFlatNode>(
    false /* multiple */
  );

  constructor(
    private database: ChecklistDatabase,
    private TabsService: TabsService
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TreeItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    database.dataChange.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TreeItemFlatNode) => node.level;

  isExpandable = (node: TreeItemFlatNode) => node.expandable;

  getChildren = (node: TreeItemNode): TreeItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TreeItemFlatNode) => _nodeData.expandable;

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TreeItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode
        : new TreeItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.code = node.code;
    flatNode.r_link = node.r_link;
    flatNode.isHeading = node.isHeading;
    flatNode.icon = node.icon;
    flatNode.expandable = node.children && node.children.length > 0;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TreeItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TreeItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  filterChanged(filterText: string) {
    this.database.filter(filterText);
    if (filterText) {
      this.treeControl.expandAll();
    } else {
      this.treeControl.collapseAll();
    }
  }

  openLink(heading: String, route: String) {
    this.TabsService.openTab(heading, route);
  }
}

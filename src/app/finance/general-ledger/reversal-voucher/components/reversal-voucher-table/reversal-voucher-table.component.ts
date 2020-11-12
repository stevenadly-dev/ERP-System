import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversal-voucher-table',
  templateUrl: './reversal-voucher-table.component.html',
  styleUrls: ['./reversal-voucher-table.component.scss']
})
export class ReversalVoucherTableComponent implements OnInit {

  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: [] = [];
  sidebar;

  groupHeaderHeight;
  headerHeight;
  floatingFiltersHeight;
  pivotGroupHeaderHeight;
  pivotHeaderHeight;
  rowHeight;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        filter: 'agTextColumnFilter',
        minWidth: 200,
        headerHeight: 150,

        suppressSizeToFit: true,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
          // margin: '-2px 0px',
        },
        // headerClass: 'erp-header-table-cell',

        // cellClass: 'cellclass',
      },
      {
        field: 'age',
        filter: 'agNumberColumnFilter',
        // pinned: 'left',
        // lockPinned: true,
        headerHeight: 150,
        rowDrag: true,

        // floatingFilter: true,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
          // margin: '-2px 0px',
        },
      },
      {
        field: 'country',
        minWidth: 200,
        headerHeight: 150,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
          // margin: '-2px 0px',
        },
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
      resizable: true,
      // rowDrag: true,

      // floatingFilter: true,
      headerClass: 'erp-header-table-cell',
    };
    this.sidebar = 'columns';

    this.groupHeaderHeight = 75;
    this.headerHeight = 32;
    this.floatingFiltersHeight = 50;
    this.pivotGroupHeaderHeight = 50;
    this.pivotHeaderHeight = 100;

    this.rowHeight = 32;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
      )
      .subscribe((data: any) => {
        this.rowData = data;
      });
  }

  onBtNormal() {
    this.gridColumnApi.setPivotMode(false);
    this.gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'country',
          rowGroup: true,
        },
        {
          colId: 'year',
          rowGroup: true,
        },
      ],
      defaultState: {
        pivot: false,
        rowGroup: false,
      },
    });
  }

  onBtPivotMode() {
    this.gridColumnApi.setPivotMode(true);
    this.gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'country',
          rowGroup: true,
        },
        {
          colId: 'year',
          rowGroup: true,
        },
      ],
      defaultState: {
        pivot: false,
        rowGroup: false,
      },
    });
  }

  onBtFullPivot() {
    this.gridColumnApi.setPivotMode(true);
    this.gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'country',
          rowGroup: true,
        },
        {
          colId: 'year',
          pivot: true,
        },
      ],
      defaultState: {
        pivot: false,
        rowGroup: false,
      },
    });
  }

  ngOnInit(): void {
  }


}

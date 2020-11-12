import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-voucher-table',
  templateUrl: './journal-voucher-table.component.html',
  styleUrls: ['./journal-voucher-table.component.scss']
})
export class JournalVoucherTableComponent implements OnInit {
  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: any[] = [];
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
        field: 'seq #',
        filter: 'agTextColumnFilter',
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
          'line-height': '1.5',
        },
        minWidth: 100,
        suppressSizeToFit: true,

        // headerClass: 'erp-header-table-cell',

        // cellClass: 'cellclass',
      },
      {
        field: 'Data',
        filter: 'agNumberColumnFilter',
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },

        minWidth: 120,
        suppressSizeToFit: true,
        // pinned: 'left',
        // lockPinned: true,

        // rowDrag: true,

        // floatingFilter: true,
      },
      {
        headerName: 'Annotattion',
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
        minWidth: 200,
      },
      {
        field: 'Reference #',
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
        minWidth: 100,
      },
      {
        field: 'Currency',
        minWidth: 100,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'EX. Rate',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Dr Tran Curr',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Dr Base Curr',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
      {
        field: 'Cr Tran Curr',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
      {
        field: 'Cr Base Curr',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
      {
        field: 'Account',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Sub Account',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Division',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Department',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
      {
        field: 'Analysis',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },

      {
        field: 'Analysis 2',
        minWidth: 200,

        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
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
    this.floatingFiltersHeight = 50;

    // this.pivotGroupHeaderHeight = 50;
    // this.pivotHeaderHeight = 100;

    this.headerHeight = 32;
    this.rowHeight = 25;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = [
      {
        'seq #': '1',
      },
      {
        'seq #': '2',
      },
      {
        'seq #': '3',
      },
      {
        'seq #': '4',
      },
      {
        'seq #': '5',
      },
      {
        'seq #': '6',
      },
      {
        'seq #': '7',
      },
      {
        'seq #': '8',
      },
      {
        'seq #': '9',
      },
      {
        'seq #': '10',
      },
      {
        'seq #': '11',
      },
      {
        'seq #': '12',
      },
      {
        'seq #': '13',
      },
      {
        'seq #': '14',
      },
      {
        'seq #': '15',
      },
      {
        'seq #': '16',
      },
    ];

    // this.http
    //   .get(
    //     'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
    //   )
    //   .subscribe((data: any) => {
    //     this.rowData = data;
    //   });
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

  ngOnInit(): void {}

}

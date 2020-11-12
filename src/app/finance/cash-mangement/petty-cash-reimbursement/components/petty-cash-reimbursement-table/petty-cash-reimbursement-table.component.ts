import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petty-cash-reimbursement-table',
  templateUrl: './petty-cash-reimbursement-table.component.html',
  styleUrls: ['./petty-cash-reimbursement-table.component.scss']
})
export class PettyCashReimbursementTableComponent implements OnInit {
  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  rowData: [] = [];
  sidebar;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'Seq #',
        filter: 'agTextColumnFilter',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        // cellClass: 'cellclass',
      },
      {
        field: 'Annotation',
        filter: 'agNumberColumnFilter',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'Currency',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'ExRate',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'Amount BC',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'OWE You',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      }
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
      // floatingFilter: true,
    };
    this.sidebar = 'columns';
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
  ngOnInit(): void {}

}

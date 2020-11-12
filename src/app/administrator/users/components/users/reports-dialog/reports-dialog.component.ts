import { UsersService } from './../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-reports-dialog',
  templateUrl: './reports-dialog.component.html',
  styleUrls: ['./reports-dialog.component.scss'],
})
export class ReportsDialogComponent implements OnInit {
  defaultColDef;
  reportsColumnDefs;
  reportsData: any[] = [];
  rowSelection: string;
  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor(private usersService: UsersService) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: false,
      sortable: false,
      filter: false,
      resizable: true,
      // floatingFilter: true,
    };
    // =================== Reports

    this.reportsColumnDefs = [
      {
        field: 'ReportCode',
        headerName: 'Report Code',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: { checkbox: true },
      },
      {
        field: 'ReportDescription',
        headerName: 'Report Description',
        minWidth: 200,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
    ];

    this.reportsData = [
      {
        ReportCode: 'R1',
        ReportDescription: 'first Report',
      },
      {
        ReportCode: 'R2',
        ReportDescription: 'SecoundReport',
      },
    ];

    this.rowSelection = 'multiple';
  }

  ngOnInit(): void {}

  onGridReady(params) {}

  getSelected() {
    let selectedData = this.agGrid.api.getSelectedRows();
    debugger;
    this.usersService.userReports.next(selectedData);
  }
}

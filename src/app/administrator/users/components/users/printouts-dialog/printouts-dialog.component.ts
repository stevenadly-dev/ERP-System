import { UsersService } from './../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-printouts-dialog',
  templateUrl: './printouts-dialog.component.html',
  styleUrls: ['./printouts-dialog.component.scss'],
})
export class PrintoutsDialogComponent implements OnInit {
  defaultColDef;
  printColumnDefs;
  printData: any[] = [];
  rowSelection: string;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor(private userService: UsersService) {
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

    // =================== print

    this.printColumnDefs = [
      {
        field: 'PrintOutCode',
        headerName: 'Print Out Code',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: { checkbox: true },
        // cellClass: 'cellclass',
      },
      {
        field: 'PrintOutDescription',
        headerName: 'Print Out Description',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'PrintOutMaxNo',
        headerName: 'Print Out Max No',
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
    ];

    this.printData = [
      {
        PrintOutCode: 'P1',
        PrintOutDescription: 'Print-1',
        PrintOutMaxNo: 5,
      },
      {
        PrintOutCode: 'P2',
        PrintOutDescription: 'Print-2',
        PrintOutMaxNo: 5,
      },
      {
        PrintOutCode: 'P3',
        PrintOutDescription: 'Print-3',
        PrintOutMaxNo: 5,
      },
    ];

    this.rowSelection = 'multiple';
  }

  ngOnInit(): void {}

  onGridReady(params) {}

  getSelected() {
    let selectedData = this.agGrid.api.getSelectedRows();
    debugger;
    this.userService.userPrintOuts.next(selectedData);
  }
}

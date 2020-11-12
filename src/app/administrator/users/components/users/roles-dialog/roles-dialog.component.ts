import { UsersService } from './../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-roles-dialog',
  templateUrl: './roles-dialog.component.html',
  styleUrls: ['./roles-dialog.component.scss'],
})
export class RolesDialogComponent implements OnInit {
  defaultColDef;
  rolesColumnDefs;
  rolesData: any[] = [];
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
    // ===================== Roles

    this.rolesColumnDefs = [
      {
        field: 'Module',
        headerName: 'Module',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: { checkbox: true },
        // cellClass: 'cellclass',
      },
      {
        field: 'ScreenCode',
        headerName: 'Screen Code',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
      {
        field: 'ScreenDescription',
        headerName: 'Description',
        minWidth: 200,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
    ];

    this.rolesData = [
      {
        Module: 'Fin',
        ScreenCode: 'Fin-123',
        ScreenDescription: 'Finance Create User',
      },
      {
        Module: 'Fin',
        ScreenCode: 'Fin-133',
        ScreenDescription: 'Finance Create User',
      },
    ];

    this.rowSelection = 'multiple';
  }

  ngOnInit(): void {}

  onGridReady(params) {}

  getSelected() {
    let selectedData = this.agGrid.api.getSelectedRows();
    this.usersService.userRoles.next(selectedData);
    debugger;
  }
}

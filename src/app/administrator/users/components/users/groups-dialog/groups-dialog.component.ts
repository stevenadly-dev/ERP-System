import { UsersService } from './../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-groups-dialog',
  templateUrl: './groups-dialog.component.html',
  styleUrls: ['./groups-dialog.component.scss'],
})
export class GroupsDialogComponent implements OnInit {
  defaultColDef;
  groupsColumnDefs;
  groupsData: any[] = [];
  rowSelection: string;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor(private usersService: UsersService) {
    this.defaultColDef = {
      flex: 1,
      // minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: false,
      sortable: false,
      filter: false,
      resizable: true,
      // floatingFilter: true,
    };

    // ===================== Groups

    this.groupsColumnDefs = [
      {
        field: 'groupCode',
        headerName: 'Group Code',
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
        field: 'groupDescription',
        headerName: 'group Description',
        minWidth: 200,
        cellStyle: {
          color: '#255aa9',
          'background-color': 'transparent',
          border: '.5px solid #255aa9',
        },
      },
    ];
    this.groupsData = [
      {
        groupCode: 'Eng',
        groupDescription: 'Engineering',
      },
      {
        groupCode: 'dev',
        groupDescription: 'Devloper',
      },
    ];

    this.rowSelection = 'multiple';
  }

  ngOnInit(): void {}

  onGridReady(params) {}

  getSelected() {
    let selectedData = this.agGrid.api.getSelectedRows();
    this.usersService.userGroups.next(selectedData);
  }
}

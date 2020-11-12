import { UsersService } from './../../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CheckboxRenderer } from './checkbox-render.componnent';

@Component({
  selector: 'app-users-options',
  templateUrl: './users-options.component.html',
  styleUrls: ['./users-options.component.scss'],
})
export class UsersOptionsComponent implements OnInit {
  @Input() activeForm: number;

  defaultColDef;
  frameworkComponents;

  groupsColumnDefs;
  groupsData: any[] = [];

  rolesColumnDefs;
  rolesData: any[] = [];

  reportsColumnDefs;
  reportsData: any[] = [];

  printColumnDefs;
  printData: any[] = [];

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
      editable: true,
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

    // ===================== Roles

    this.rolesColumnDefs = [
      {
        field: 'Module',
        headerName: 'Module',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        // cellClass: 'cellclass',
      },
      {
        field: 'ScreenCode',
        headerName: 'Screen Code',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'ScreenDescription',
        headerName: 'Description',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'Create',
        headerName: 'create',
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        // cellRenderer: (params) => {
        //   debugger;
        //   return `<input type='checkbox' name='create' [value]="params.value" ${
        //     params.value ? 'checked' : ''
        //   } />`;
        // },

        cellRenderer: 'checkboxRenderer',
      },
      {
        field: 'View',
        headerName: 'view',
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        cellRenderer: (params) => {
          return `<input type='checkbox' value='view' ${
            params.value ? 'checked' : ''
          } />`;
        },
      },
      {
        field: 'Update',
        headerName: 'update',
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        cellRenderer: (params) => {
          return `<input type='checkbox' value='Update' ${
            params.value ? 'checked' : ''
          } />`;
        },
      },
      {
        field: 'Delete',
        headerName: 'delete',
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        cellRenderer: (params) => {
          return `<input type='checkbox' value='Delete' ${
            params.value ? 'checked' : ''
          } />`;
        },
      },
    ];

    // this.rolesData = [
    //   {
    //     Module: 'Fin',
    //     ScreenCode: 'Fin-123',
    //     ScreenDescription: 'Finance Create User',
    //     Create: false,
    //     View: false,
    //     Update: false,
    //     Delete: false,
    //   },
    //   {
    //     Module: 'Fin',
    //     ScreenCode: 'Fin-133',
    //     ScreenDescription: 'Finance Create User',
    //     Create: false,
    //     View: false,
    //     Update: false,
    //     Delete: false,
    //   },
    // ];
    // =================== Reports

    this.reportsColumnDefs = [
      {
        field: 'ReportCode',
        headerName: 'Report Code',
        // pinned: 'left',
        // lockPinned: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
      {
        field: 'ReportDescription',
        headerName: 'Report Description',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
    ];

    // =================== print

    this.printColumnDefs = [
      {
        field: 'PrintOutCode',
        headerName: 'Print Out Code',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
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
    this.frameworkComponents = {
      checkboxRenderer: CheckboxRenderer,
    };
    // ===================
  }

  ngOnInit(): void {
    this.getGroupsData();
    this.getRolesData();
    this.getReportsData();
    this.getPrintOutsData();
  }

  onGridReady(params) {}

  // getRolesData(data) {
  //   debugger;
  //   console.log(this.rolesData);
  // }

  getGroupsData() {
    this.usersService.userGroups.subscribe((data) => {
      this.groupsData = data;
    });
  }

  getRolesData() {
    this.usersService.userRoles.subscribe((data) => {
      console.log(',,,,,', data);

      // debugger;
      // data.forEach((role) => {
      //   this.rolesData.push({
      //     Module: role.Module,
      //     ScreenCode: role.ScreenCode,
      //     ScreenDescription: role.ScreenDescription,
      //     Create: false,
      //     View: false,
      //     Update: false,
      //     Delete: false,
      //   });
      // });
      for (const role of data) {
        let newRolesData = [];
        newRolesData.push({
          Module: role.Module,
          ScreenCode: role.ScreenCode,
          ScreenDescription: role.ScreenDescription,
          Create: false,
          View: false,
          Update: false,
          Delete: false,
        });
        this.rolesData = newRolesData;
      }
      // console.log('sssssss', this.rolesData);
    });
  }
  getReportsData() {
    this.usersService.userReports.subscribe((data) => {
      this.reportsData = data;
    });
  }

  getPrintOutsData() {
    this.usersService.userPrintOuts.subscribe((data) => {
      this.printData = data;
    });
  }
  submitData(data) {
    this.usersService.pushUserData({ groupPartials: data });
  }
  submitRoles(data) {
    this.usersService.pushUserData({ RolePartials: data });
  }

  submitReports(data) {
    this.usersService.pushUserData({ ReportPartials: data });
  }

  submitPrintOuts(data) {
    this.usersService.pushUserData({ PrintOutPartials: data });
  }
}

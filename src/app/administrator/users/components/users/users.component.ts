import { CopyUserFromDialogComponent } from './copy-user-from-dialog/copy-user-from-dialog.component';
import { UsersService } from './../../services/users.service';
import { GroupsDialogComponent } from './groups-dialog/groups-dialog.component';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { PrintoutsDialogComponent } from './printouts-dialog/printouts-dialog.component';
import { ReportsDialogComponent } from './reports-dialog/reports-dialog.component';
import { RolesDialogComponent } from './roles-dialog/roles-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  formIcon: boolean = true;
  form2Icon: boolean = true;
  optionsIcon: boolean = true;
  activeForm: number = 1;
  activeForm2: number = 1;
  activeForm3: number = 1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Administrator' },
    { name: 'Users' },
    { name: 'ADMXXX-Create' },
  ];

  constructor(private dialog: MatDialog, private UsersService: UsersService) {}

  ngOnInit(): void {}

  openDialog(activeForm3: number) {
    if (activeForm3 == 1) {
      const dialogRef = this.dialog.open(GroupsDialogComponent, {
        // height: '90%',
        width: '90%',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (activeForm3 == 2) {
      const dialogRef = this.dialog.open(RolesDialogComponent, {
        // height: '90%',
        width: '90%',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (activeForm3 == 3) {
      const dialogRef = this.dialog.open(ReportsDialogComponent, {
        // height: '90%',
        width: '90%',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (activeForm3 == 4) {
      const dialogRef = this.dialog.open(PrintoutsDialogComponent, {
        // height: '90%',
        width: '90%',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  openCopyFrom() {
    const dialogRef = this.dialog.open(CopyUserFromDialogComponent, {
      // height: '90%',
      width: '90%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addUser() {
    this.UsersService.AddUser().subscribe((res) => {
      console.log('added User post', res);
    });
  }
}

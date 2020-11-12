import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './components/users/users.component';
import { CreateUserMainFormComponent } from './components/users/create-user-main-form/create-user-main-form.component';
import { GroupsDialogComponent } from './components/users/groups-dialog/groups-dialog.component';
import { PrintoutsDialogComponent } from './components/users/printouts-dialog/printouts-dialog.component';
import { ReportsDialogComponent } from './components/users/reports-dialog/reports-dialog.component';
import { RolesDialogComponent } from './components/users/roles-dialog/roles-dialog.component';
import { UsersForm2Component } from './components/users/users-form2/users-form2.component';
import { UsersOptionsComponent } from './components/users/users-options/users-options.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FilterListComponent } from './components/users-list/filter-list/filter-list.component';
import { CopyUserFromDialogComponent } from './components/users/copy-user-from-dialog/copy-user-from-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersOptionsComponent,
    UsersForm2Component,
    CreateUserMainFormComponent,
    GroupsDialogComponent,
    RolesDialogComponent,
    ReportsDialogComponent,
    PrintoutsDialogComponent,
    UsersListComponent,
    FilterListComponent,
    CopyUserFromDialogComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}

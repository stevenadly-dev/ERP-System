import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // newUser = [];
  newUser = {
    Address: '',
    Admin: false,
    AutoLicence: false,
    Block: false,
    City: '',
    Country: '',
    CreatedBy: '',
    CreatedDate: '',
    DepartmentId: 0,
    DevisionId: 0,
    Email: '',
    Ext: '',
    FaxNum: '',
    FirstName: '',
    JobTitle: '',
    LastName: '',
    Mobile1: '',
    Mobile2: '',
    Office: '',
    PhoneNo: '',
    Status: false,
    Title: '',
    // UserId: 0,
    UserName: '',
    JobType: '',
    WorNo: '',
    ZipCode: '',
    //-------------
    Password: '',
    ChangePassword: false,
    // ----------
    GroupPartials: [],
    RolePartials: [],
    ReportPartials: [],
    PrintOutPartials: [],
  };
  userGroups: Subject<any>;
  userRoles: Subject<any>;
  userReports: Subject<any>;
  userPrintOuts: Subject<any>;

  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.userGroups = new Subject();
    this.userRoles = new Subject();
    this.userReports = new Subject();
    this.userPrintOuts = new Subject();
  }

  pushUserData(userData: any, index?: number) {
    // this.newUser[index] = userData;
    // console.log(this.newUser);
    // debugger;
    this.newUser = {
      Address: userData.address ? userData.address : this.newUser.Address,
      Admin: userData.admin ? userData.admin : this.newUser.Admin,
      AutoLicence: userData.autoLicence
        ? userData.autoLicence
        : this.newUser.AutoLicence,
      Block: userData.block ? userData.block : this.newUser.Block,
      City: userData.city ? userData.city : this.newUser.City,
      Country: userData.country ? userData.country : this.newUser.Country,
      CreatedBy: userData.createdBy
        ? userData.createdBy
        : this.newUser.CreatedBy,
      CreatedDate: userData.createdDate
        ? userData.createdDate
        : this.newUser.CreatedDate,
      DepartmentId: +userData.departmentId
        ? +userData.departmentId
        : this.newUser.DepartmentId,
      DevisionId: +userData.devisionId
        ? +userData.devisionId
        : this.newUser.DevisionId,
      Email: userData.email ? userData.email : this.newUser.Email,
      Ext: userData.ext ? userData.ext : this.newUser.Ext,
      FaxNum: userData.faxNum ? userData.faxNum : this.newUser.FaxNum,
      FirstName: userData.firstName
        ? userData.firstName
        : this.newUser.FirstName,
      JobTitle: userData.jobTitle ? userData.jobTitle : this.newUser.JobTitle,
      LastName: userData.lastName ? userData.lastName : this.newUser.LastName,
      Mobile1: userData.mobile1 ? userData.mobile1 : this.newUser.Mobile1,
      Mobile2: userData.mobile2 ? userData.mobile2 : this.newUser.Mobile2,
      Office: userData.office ? userData.office : this.newUser.Office,
      PhoneNo: userData.phoneNo ? userData.phoneNo : this.newUser.PhoneNo,
      Status: userData.status ? userData.status : this.newUser.Status,
      Title: userData.title ? userData.title : this.newUser.Title,
      // UserId: userData.userId ? userData.userId : this.newUser.UserId,
      UserName: userData.userName ? userData.userName : this.newUser.UserName,
      JobType: userData.jobType ? userData.jobType : this.newUser.JobType,
      WorNo: userData.worNo ? userData.worNo : this.newUser.WorNo,
      ZipCode: userData.zipCode ? userData.zipCode : this.newUser.ZipCode,
      // =======
      Password: userData.password ? userData.password : this.newUser.Password,
      ChangePassword: userData.changePassword
        ? userData.changePassword
        : this.newUser.ChangePassword,
      // =======
      GroupPartials: userData.groupPartials
        ? userData.groupPartials
        : this.newUser.GroupPartials,
      RolePartials: userData.RolePartials
        ? userData.RolePartials
        : this.newUser.RolePartials,
      ReportPartials: userData.ReportPartials
        ? userData.ReportPartials
        : this.newUser.ReportPartials,
      PrintOutPartials: userData.PrintOutPartials
        ? userData.PrintOutPartials
        : this.newUser.PrintOutPartials,
    };

    console.log('usrr date at service', this.newUser);
  }

  AddUser() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      charset: 'utf-8',
    });
    let options = { headers: headers };
    return this.http.post(
      `${environment.apiUrl}Employee?CreatedBy=1`,
      this.newUser,
      options
    );
  }
}

// Address: '';
// Admin: null;
// AutoLicence: '';
// Block: null;
// ChangePassword: false;
// City: '';
// Country: '';
// CreatedBy: '';
// CreatedDate: '';
// DepartmentId: '';
// DevisionId: '2';
// Email: 's@s.com';
// Ext: '';
// FaxNum: '';
// FirstName: 'sss';
// GroupPartials: [];
// JobTitle: '';
// JobType: 'saab';
// LastName: 'ssss';
// Mobile1: '';
// Mobile2: '';
// Office: '';
// Password: 'CF1~91qB#5l1^}*';
// PhoneNo: '';
// PrintOutPartials: [];
// ReportPartials: [];
// RolePartials: [];
// Status: '';
// Title: 'sss';
// UserId: '';
// UserName: 's';
// WorNo: '';
// ZipCode: '';

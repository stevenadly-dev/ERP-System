import { UsersService } from './../../../services/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SearchCountryField,
  TooltipLabel,
  CountryISO,
} from 'ngx-intl-tel-input';
import { DepartmentDropDownDto } from 'src/app/shared/models/department-drop-down-dto';
import { DevisionDropDownDto } from 'src/app/shared/models/devision-drop-down-dto';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';

@Component({
  selector: 'app-create-user-main-form',
  templateUrl: './create-user-main-form.component.html',
  styleUrls: ['./create-user-main-form.component.scss'],
})
export class CreateUserMainFormComponent implements OnInit {
  @Input() activeForm: number;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  departmentsList: DepartmentDropDownDto[] = [];
  devisionList: DevisionDropDownDto[] = [];
  countriesList = [];
  citiesList = [];

  usersForm: FormGroup;
  constructor(
    private dropdownsService: DropdownsService,
    private countriesService: CountriesService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getDepartmentDropDownData();
    this.getDevisionDropDownData();
    this.getCountiresList();
    this.checkValidtyAndPush();
    this.pushUserData();
  }

  initForm() {
    this.usersForm = new FormGroup({
      // =============1
      userId: new FormControl(''),
      title: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      jobType: new FormControl(''),
      autoLicence: new FormControl(''),
      admin: new FormControl(),
      block: new FormControl(),
      createdBy: new FormControl(''),
      createdDate: new FormControl(''),
      status: new FormControl(''),
      // ==============2
      phoneNo: new FormControl(''),
      faxNum: new FormControl(''),
      mobile1: new FormControl(''),
      worNo: new FormControl(''),
      ext: new FormControl(''),
      mobile2: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
      country: new FormControl(''),
      //===============3
      jobTitle: new FormControl(''),
      departmentId: new FormControl(''),
      office: new FormControl(''),
      devisionId: new FormControl(''),
    });
  }
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  getCountiresList() {
    this.countriesService.getCountries().subscribe((data) => {
      console.log(data);
      this.countriesList = data;
    });
  }

  getDepartmentDropDownData() {
    this.dropdownsService.getDepartmentDropDown().subscribe((data) => {
      console.log(data);
      this.departmentsList = data;
    });
  }

  getDevisionDropDownData() {
    this.dropdownsService.getDevisionDropDown().subscribe((data) => {
      console.log(data);
      this.devisionList = data;
    });
  }

  countryChanged(event) {
    console.log(event.target.value);
    let val = event.target.value;
    let selectedCountryObject = this.countriesList.find(
      (x) => x.CountryName == val
    );
    this.citiesList = selectedCountryObject.States;
  }

  checkValidtyAndPush() {
    if (this.usersForm.valid) {
      this.usersService.pushUserData(this.usersForm.value, 0);
    }
  }

  pushUserData() {
    // this.usersService.pushUserData(this.usersForm);
    this.usersForm.valueChanges.subscribe((_) => {
      this.checkValidtyAndPush();
    });
  }
}

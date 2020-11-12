import { UsersService } from './../../../services/users.service';
import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-users-form2',
  templateUrl: './users-form2.component.html',
  styleUrls: ['./users-form2.component.scss'],
})
export class UsersForm2Component implements OnInit {
  @Input() activeForm: number;
  defaultColDef;
  companiesColumnDefs;
  companiesData: [] = [];
  radioPass = 2;
  password: FormControl;
  changePassword: FormControl;

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
    this.companiesColumnDefs = [
      {
        field: 'Company Code',
        minWidth: 200,
        suppressSizeToFit: true,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
        // cellClass: 'cellclass',
      },
      {
        field: 'Company Name',
        minWidth: 200,
        cellStyle: { color: '#255aa9', 'background-color': 'transparent' },
      },
    ];
  }

  ngOnInit(): void {
    this.password = new FormControl('', [
      this.regexValidator(new RegExp('.*[0-9].*'), { number: 'false' }),
      this.regexValidator(new RegExp('.*[A-Z].*'), { upperchar: 'false' }),
      this.regexValidator(new RegExp('^(?=.*[!@#$%^&*()])'), {
        specialchar: 'false',
      }),
      Validators.minLength(8),
    ]);
    this.changePassword = new FormControl('');

    this.submitPassword();
  }

  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  isPasswordValid() {
    if (this.password.value && this.password.errors == null) return true;
    return false;
  }

  password_generator(len?) {
    var length = len ? len : 10;
    var string = 'abcdefghijklmnopqrstuvwxyz'; //to upper
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    var password = '';
    var character = '';
    var crunch = true;
    while (password.length < length) {
      let entity1 = Math.ceil(string.length * Math.random() * Math.random());
      let entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      let entity3 = Math.ceil(
        punctuation.length * Math.random() * Math.random()
      );
      let hold = string.charAt(entity1);
      hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password
      .split('')
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join('');
    this.password.setValue(password.substr(0, len));
    // return password.substr(0, len);
  }

  handleChange(event) {
    if (this.radioPass == 1) {
      this.password_generator(15);
      this.password.disable();
    } else {
      this.password.setValue('');
      this.password.enable();
    }
  }

  onGridReady(params) {}

  submitPassword() {
    this.password.valueChanges.subscribe((_) => {
      this.usersService.pushUserData({ password: this.password.value });
      this.usersService.pushUserData({
        changePassword: this.changePassword.value,
      });

      // console.log('=======================', this.changePassword);
    });

    this.changePassword.valueChanges.subscribe((_) => {
      this.usersService.pushUserData({ password: this.password.value });
      this.usersService.pushUserData({
        changePassword: this.changePassword.value,
      });
    });
  }
}

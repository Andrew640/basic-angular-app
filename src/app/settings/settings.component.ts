import { FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  edit = false;

  first_name = 'Andrew';
  last_name = 'Thomas';
  phone_number = '07508202454';
  password = 'Password123';
  email = 'andrew.thomas640@gmail.com';

  public settingsForm = this.fb.group({
    first_name: [this.first_name, Validators.required],
    last_name: [this.last_name, Validators.required],
    password: [this.password],
    phone_number: [
      this.phone_number,
      [
        Validators.required,
        Validators.pattern(
          RegExp(/^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/)
        )
      ]
    ],
    email: [
      this.email,
      [
        Validators.required,
        Validators.pattern(
          RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      )]
    ],
  });

  constructor(public fb: FormBuilder) {}

  editDetails() {
    this.edit = true;
  }

  onSubmit(info, isValid: boolean) {
    if (isValid) {
      this.first_name = info.first_name;
      this.last_name = info.last_name;
      this.password = info.password;
      this.phone_number = info.phone_number;
      this.email = info.email;
      this.edit = false;
    }
  }

}

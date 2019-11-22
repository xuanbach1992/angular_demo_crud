import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profile = {
    username: 'Bob',
    password: 'abc@deg.com',
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(dataForm) {
    console.log(dataForm.value);
  }
}

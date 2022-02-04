import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  formNav = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  constructor() {}

  get f() {
    return this.formNav.controls;
  }

  submit() {
    console.log(this.formNav.value);
  }

  ngOnInit(): void {}
}

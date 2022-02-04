import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formHeader = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  constructor() {}

  get f() {
    return this.formHeader.controls;
  }

  submit() {
    console.log(this.formHeader.value);
  }
  ngOnInit(): void {
  }

}

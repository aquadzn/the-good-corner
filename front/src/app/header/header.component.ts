import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  formHeader = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
  });

  constructor(private router: Router) {}

  submit() {
    this.router.navigateByUrl(
      `/search/${this.formHeader.controls['search'].value}`
    );
  }

  ngOnInit(): void {}
}

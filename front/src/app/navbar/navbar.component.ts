import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  formNav = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
  });
  showLoginModal = false;
  constructor(private router: Router) {}

  submit() {
    this.router.navigateByUrl(
      `/search/${this.formNav.controls['search'].value}`
    );
  }

  ngOnInit(): void {}


}

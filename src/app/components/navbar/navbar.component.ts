import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isOpen = false;
  isOpenBody = false;

  constructor() { }

  ngOnInit(): void {
  }

}

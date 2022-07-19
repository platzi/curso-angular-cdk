import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen = false;
  isOpenBody = false;

  constructor() { }

  ngOnInit(): void {
  }

}

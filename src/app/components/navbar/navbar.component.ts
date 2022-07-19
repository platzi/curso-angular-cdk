import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;

  isOpen = false;
  isOpenBody = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { faBell, faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons';
=======
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 0bd42fb... :construction: Work

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
<<<<<<< HEAD
  faClose = faClose;
=======
>>>>>>> 0bd42fb... :construction: Work

  isOpen = false;
  isOpenBody = false;

  constructor() { }

  ngOnInit(): void {
  }

}

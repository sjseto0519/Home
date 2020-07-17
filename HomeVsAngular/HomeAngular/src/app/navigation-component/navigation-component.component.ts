import { Component, OnInit } from '@angular/core';
import navigationObj from '../../assets/json/navigation.json';
import SideNavigation from '../models/SideNavigation.js';
import { EventMediatorService } from '../event-mediator-service.service.js';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.scss']
})
export class NavigationComponentComponent implements OnInit {

  constructor(private eventMediator: EventMediatorService) { }

  clearShowPiece() {
    this.eventMediator.publish("hideShowPiece", null);
  }

  ngOnInit() {
    this.navItems = [];
    let length = navigationObj["navigation"].length;
    while (length--) {
      const prop = navigationObj["navigation"][length];
      this.navItems.unshift(new SideNavigation(prop));
    }
  }

  navItems: SideNavigation[];

}

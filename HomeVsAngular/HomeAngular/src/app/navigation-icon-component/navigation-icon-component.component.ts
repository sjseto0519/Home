import { Component, OnInit, Input } from '@angular/core';
import { EventMediatorService } from '../event-mediator-service.service';

@Component({
  selector: 'app-navigation-icon',
  templateUrl: './navigation-icon-component.component.html',
  styleUrls: ['./navigation-icon-component.component.scss']
})
export class NavigationIconComponentComponent implements OnInit {

  constructor(private eventMediator: EventMediatorService) {
  }

  ngOnInit() {
  }

  clickNavigationAnchor() {
    this.eventMediator.publish("showShowPiece", null);
    this.eventMediator.publish("showComponent", this.section);
  }

  @Input() icon: string;
  @Input() tooltip: string;
  @Input() section: string;

}

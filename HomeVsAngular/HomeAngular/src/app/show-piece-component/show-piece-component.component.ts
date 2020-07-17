import { Component, OnInit } from '@angular/core';
import { EventMediatorService } from '../event-mediator-service.service';

@Component({
  selector: 'app-showpiece',
  templateUrl: './show-piece-component.component.html',
  styleUrls: ['./show-piece-component.component.scss']
})
export class ShowPieceComponentComponent implements OnInit {

  constructor(private eventMediator: EventMediatorService) {
  }

  ngOnInit() {
    this.eventMediator.subscribe("showShowPiece", this.show.bind(this));
    this.eventMediator.subscribe("hideShowPiece", this.hide.bind(this));
  }

  show() {
    this.showShowPiece = true;
  }

  hide() {
    this.showShowPiece = false;
  }

  showShowPiece: boolean;

}

import { Component, OnInit } from '@angular/core';
import resumeObj from '../../assets/json/resume.json';
import { EventMediatorService } from '../event-mediator-service.service.js';

@Component({
  selector: 'app-resume',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.scss']
})
export class ResumeComponentComponent implements OnInit {

  constructor(private eventMediator: EventMediatorService) {
    this.itemsToShow = [];
  }

  ngOnInit() {
    this.eventMediator.subscribe("showComponent", this.showComponent.bind(this));
    this.itemsToShow = [];
  }

  showComponent(componentName: string) {
    this.itemsToShow = [];
    const componentArray: any[] = resumeObj[componentName];
    let l = componentArray.length;
    while (l--) {
      const component = componentArray[l];
      let contentDisplay = component.content;
      if (component.type === 'daterange') {
        contentDisplay = component.start + " - " + component.end;
      }
      else if (component.type === 'dotDelimitedList') {
        contentDisplay = {
          'list': component.content
        };
      }
      else if (component.type === 'link') {
        contentDisplay = {
          'href': component.href,
          'text': component.content
        };
      }
      else if (component.type === 'commaDelimitedList') {
        let content = "";
        let cl = component.content.length;
        let i = 0;
        while (i++ < cl) {
          content += component.content[i - 1] + ", ";
        }
        contentDisplay = content;
      }
      else if (Array.isArray(component.content)) {
        let content = "";
        let cl = component.content.length;
        let i = 0;
        while (i++ < cl) {
          content += component.content[i-1] + " ";
        }
        contentDisplay = content;
      }
      this.itemsToShow.unshift({
        type: component.type,
        contentDisplay: contentDisplay
      });
    }
  }

  public itemsToShow: any[];

}

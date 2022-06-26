import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import resumeObj from '../assets/json/resume.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scott-seto.com';
  
  public constructor(private titleService: Title ) { 

  }
 
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }


  
  ngOnInit() {
    const year = new Date().getFullYear();
    this.setTitle(this.title);


  }
}

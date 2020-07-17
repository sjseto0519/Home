import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { TitleComponentComponent } from './title-component/title-component.component';
import { ParagraphComponentComponent } from './paragraph-component/paragraph-component.component';
import { DateRangeComponentComponent } from './date-range-component/date-range-component.component';
import { DotListComponentComponent } from './dot-list-component/dot-list-component.component';
import { CommaListComponentComponent } from './comma-list-component/comma-list-component.component';
import { LinkComponentComponent } from './link-component/link-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { ShowPieceComponentComponent } from './show-piece-component/show-piece-component.component';
import { NavigationIconComponentComponent } from './navigation-icon-component/navigation-icon-component.component';
import { TooltipDirectiveDirective } from './tooltip-directive.directive';
import { ResumeComponentComponent } from './resume-component/resume-component.component';
import { GuidService } from './guid-service.service';
import { EventMediatorService } from './event-mediator-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    ParagraphComponentComponent,
    DateRangeComponentComponent,
    DotListComponentComponent,
    CommaListComponentComponent,
    LinkComponentComponent,
    NavigationComponentComponent,
    ShowPieceComponentComponent,
    NavigationIconComponentComponent,
    TooltipDirectiveDirective,
    ResumeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [Title, GuidService, EventMediatorService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

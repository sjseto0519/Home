import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphComponentComponent } from './paragraph-component.component';

describe('ParagraphComponentComponent', () => {
  let component: ParagraphComponentComponent;
  let fixture: ComponentFixture<ParagraphComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

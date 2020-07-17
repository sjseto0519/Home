import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPieceComponentComponent } from './show-piece-component.component';

describe('ShowPieceComponentComponent', () => {
  let component: ShowPieceComponentComponent;
  let fixture: ComponentFixture<ShowPieceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPieceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPieceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

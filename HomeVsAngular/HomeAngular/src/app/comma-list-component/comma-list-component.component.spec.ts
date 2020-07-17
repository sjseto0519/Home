import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaListComponentComponent } from './comma-list-component.component';

describe('CommaListComponentComponent', () => {
  let component: CommaListComponentComponent;
  let fixture: ComponentFixture<CommaListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommaListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommaListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotListComponentComponent } from './dot-list-component.component';

describe('DotListComponentComponent', () => {
  let component: DotListComponentComponent;
  let fixture: ComponentFixture<DotListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

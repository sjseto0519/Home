import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationIconComponentComponent } from './navigation-icon-component.component';

describe('NavigationIconComponentComponent', () => {
  let component: NavigationIconComponentComponent;
  let fixture: ComponentFixture<NavigationIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationIconComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

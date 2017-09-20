import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuLeftSubComponent } from './nav-menu-left-sub.component';

describe('NavMenuLeftSubComponent', () => {
  let component: NavMenuLeftSubComponent;
  let fixture: ComponentFixture<NavMenuLeftSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuLeftSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuLeftSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

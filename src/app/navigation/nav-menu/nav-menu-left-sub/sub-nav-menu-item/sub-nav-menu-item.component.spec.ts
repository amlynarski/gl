import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavMenuItemComponent } from './sub-nav-menu-item.component';

describe('SubNavMenuItemComponent', () => {
  let component: SubNavMenuItemComponent;
  let fixture: ComponentFixture<SubNavMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaUsersComponent } from './pa-users.component';

describe('PaUsersComponent', () => {
  let component: PaUsersComponent;
  let fixture: ComponentFixture<PaUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

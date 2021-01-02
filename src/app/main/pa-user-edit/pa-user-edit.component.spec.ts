import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaUserEditComponent } from './pa-user-edit.component';

describe('PaUserEditComponent', () => {
  let component: PaUserEditComponent;
  let fixture: ComponentFixture<PaUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

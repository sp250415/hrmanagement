import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaClientListComponent } from './pa-client-list.component';

describe('PaClientListComponent', () => {
  let component: PaClientListComponent;
  let fixture: ComponentFixture<PaClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

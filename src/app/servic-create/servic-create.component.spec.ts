import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicCreateComponent } from './servic-create.component';

describe('ServicCreateComponent', () => {
  let component: ServicCreateComponent;
  let fixture: ComponentFixture<ServicCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

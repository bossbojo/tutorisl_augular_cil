import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicshowComponent } from './servicshow.component';

describe('ServicshowComponent', () => {
  let component: ServicshowComponent;
  let fixture: ComponentFixture<ServicshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

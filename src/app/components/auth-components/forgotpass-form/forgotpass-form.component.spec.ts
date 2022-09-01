import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassFormComponent } from './forgotpass-form.component';

describe('ForgotpassFormComponent', () => {
  let component: ForgotpassFormComponent;
  let fixture: ComponentFixture<ForgotpassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpassFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

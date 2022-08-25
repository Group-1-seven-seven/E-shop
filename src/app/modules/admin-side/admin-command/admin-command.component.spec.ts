import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBarComponent } from './admin-command.component';

describe('CommandBarComponent', () => {
  let component: CommandBarComponent;
  let fixture: ComponentFixture<CommandBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

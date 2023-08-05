import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLogoComponent } from './teams-logo.component';

describe('TeamsLogoComponent', () => {
  let component: TeamsLogoComponent;
  let fixture: ComponentFixture<TeamsLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsLogoComponent]
    });
    fixture = TestBed.createComponent(TeamsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionnelsComponent } from './professionnels.component';

describe('ProfessionnelsComponent', () => {
  let component: ProfessionnelsComponent;
  let fixture: ComponentFixture<ProfessionnelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionnelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

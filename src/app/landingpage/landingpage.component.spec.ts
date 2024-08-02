import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageComponent } from './landingpage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SpacesComponent } from './spaces/spaces.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

describe('LandingpageComponent', () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGridListModule, MatProgressSpinnerModule, MatCardModule],
      declarations: [LandingpageComponent, SpacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

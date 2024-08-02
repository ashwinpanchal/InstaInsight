import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesComponent } from './spaces.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

describe('SpacesComponent', () => {
  let component: SpacesComponent;
  let fixture: ComponentFixture<SpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGridListModule, MatCardModule],
      declarations: [SpacesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

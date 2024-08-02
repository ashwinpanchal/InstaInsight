import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { SpacesComponent } from './spaces/spaces.component';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [LandingpageComponent, SpacesComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinner,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardImage,
    MatCardActions,
    MatButton,
  ],
})
export class LandingpageModule {}

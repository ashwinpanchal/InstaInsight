import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent implements OnInit {
  accountInfo: any = null; // Initialize to null
  loading = true; // Flag to indicate loading state

  ngOnInit() {
    setTimeout(() => {
      this.accountInfo = {
        image: 'company.jpg',
        name: 'John Doe',
        description: 'This is a sample description.',
      };
      this.loading = false;
    }, 2000);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss',
})
export class SpacesComponent implements OnInit {
  spaceArray: any = [];
  placeholderText = 'Your spaces';

  ngOnInit() {
    this.spaceArray = [
      {
        head: 'card 1',
        picture: 'card.png',
      },
      {
        head: 'card 2',
        picture: 'card.png',
      },
      {
        head: 'card 3',
        picture: 'card.png',
      },
      {
        head: 'card 4',
        picture: 'card.png',
      },
      {
        head: 'card 5',
        picture: 'card.png',
      },
    ];
  }
}

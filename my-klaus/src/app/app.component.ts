import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './hero.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heros';
  hero: Hero =  {
    id : 1,
    name : 'WindStorm'
  };
}

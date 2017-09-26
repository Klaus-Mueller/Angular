import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROS : Hero[] = [
  {id: 1, name: 'goku'},
  {id:2, name: 'Daredevil'},
  {id:3, name: 'Naruto'},
  {id:4, name: 'Sasuke'},
  {id:5, name: 'Iron man'},
  {id:6, name: 'Hulk'},
  {id:7, name: 'Cap. America'},
];

@Component({
  selector: 'app-root',
  templateUrl: './hero.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of heros';
  heros = HEROS;
  selectedHero : Hero;
  // Click hero action
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}

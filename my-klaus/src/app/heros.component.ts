import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heros',
  templateUrl: './hero.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HerosComponent implements OnInit {
  // Build de heroService
  constructor(private heroService : HeroService){}
  // On Init initialize the heros list
  ngOnInit(): void {
    this.getHeros();
  }
  title = 'Tour of heros';
  heros : Hero[];
  selectedHero : Hero;
  // Click hero action
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
  // Return heros list
  getHeros(): void {
    this.heroService.getHerosSlowly().then(herosData => this.heros = herosData);
  }

}

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.html'
})

export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService){}
  heros: Hero[] = [];

  ngOnInit():void{
    this.heroService.getHerosSlowly().then(herosList => this.heros = herosList.slice(1,5));
  }
}

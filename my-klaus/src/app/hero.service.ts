import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable()
export class HeroService {
  // Return list of heros
  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROS);
  }
  // Resolve using a bad internet connection
  getHerosSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeros()), 2000);
    })
  }
  // Return one hero
  getHero(id: number): Promise<Hero> {
    return this.getHeros().then(heros => heros.find(hero => hero.id === id));
  }
}

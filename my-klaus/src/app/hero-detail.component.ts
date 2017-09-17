import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.html',
  styleUrls:['./app/app.component.css']
})

export class HeroDetailComponent {
  hero: Hero;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HerosComponent } from './heros.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HerosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Hero Router
    RouterModule.forRoot([
      {
        path: 'heros',
        component: HerosComponent
      },
      {
        path: 'my-dash',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component : HeroDetailComponent
      },
      {
        path: '',
        redirectTo : '/my-dash',
        pathMatch : 'full'
      }
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

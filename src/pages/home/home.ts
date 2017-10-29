import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   goWeather(){
     this.navCtrl.push(WeatherPage);
  }

}

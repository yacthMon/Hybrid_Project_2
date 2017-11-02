import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { ToastController } from 'ionic-angular';
import { GooglePlusPage } from '../google-plus/google-plus';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  day:Date;
  today:string;
  time:string;
  endDate:string;  
  title:string;
  location:string;
  note:string;
  constructor(public navCtrl: NavController, private calendar: Calendar, public toastCtrl: ToastController) {
    this.day = new Date();
    this.today = `${this.day.getDate()}-${this.day.getMonth()+1}-${this.day.getFullYear()}`;
    this.time = `${this.day.getHours}:${this.day.getMinutes}`;
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log("Create Success"); },
      (err) => { console.log("Damn it error hommie : " + err ); }
    );
  }

  goGooglePlus() {
    this.navCtrl.push(GooglePlusPage);
  }

  loadMap() {
    this.navCtrl.push(MapPage);
  }

  createEvent(){    
    console.log("Create event work");
    console.log(new Date());
    console.log(new Date(this.endDate));
    
    this.calendar.createEventInteractively(this.title, this.location, this.note, new Date(), new Date(this.endDate)).then((result)=>{
      let toast = this.toastCtrl.create({
        message: 'Event Created !',
        duration: 2000,
        position: 'top',
        showCloseButton: true,
        dismissOnPageChange: true
      });
      toast.present();
      console.log("Complete create event : " );
      console.log(result);
    },(err)=>{
      console.log("Error create event : " + err);
    });
  }
}

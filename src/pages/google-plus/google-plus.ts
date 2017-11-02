import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the GooglePlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html',
})
export class GooglePlusPage {
  user_data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.loginGooglePlus();
  }

  loginGooglePlus(){
    this.googlePlus.login({})
    .then(res =>{let toast = this.toastCtrl.create({
      message: 'Loing Success!',
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      dismissOnPageChange: true
    });
    console.log("Login data");
    console.log(res);
    this.user_data = res;
    toast.present();})
    .catch(err => {let toast = this.toastCtrl.create({
      message: 'Loing Error! ' + err,
      duration: 6000,
      position: 'top',
      showCloseButton: true,
      dismissOnPageChange: true
    });
    toast.present();
  console.log('Loing Error! ' + err);});
  }

}

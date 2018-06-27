import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meupedido',
  templateUrl: 'meupedido.html',
})
export class MeupedidoPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeupedidoPage');
  }

  showLink(){
    const alert = this.alert.create({
      title: 'Veja a Url!',
      subTitle: 'https://m.facebook.com/photo.php?fbid=1994968380575657/',
      buttons: ['Fechar']
    });
    alert.present();
  }

}

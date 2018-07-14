import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-margenslucro',
  templateUrl: 'margenslucro.html',
})
export class MargenslucroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  showPrice(id) {
    let alert = this.alert.create({
      title: 'Deseja modificar o valor?',
      inputs: [
        {
          name: 'valor',
          placeholder: 'Novo Valor'
        }
      ],
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        },
        {
          text: 'Modificar',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MargenslucroPage');
  }

}

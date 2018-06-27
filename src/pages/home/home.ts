import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  viewPedido(id){
    this.navCtrl.push('MeupedidoPage', {
      
    })
    console.log(id);
    
  }

}

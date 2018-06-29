import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PainelProvider } from '../../providers/painel/painel';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pedidos: Observable<any>



  constructor(public navCtrl: NavController,
    private provider: PainelProvider) {
    this.pedidos = this.provider.getAll();

  }

  viewPedido(id) {
    this.navCtrl.push('MeupedidoPage', id)
  }

}

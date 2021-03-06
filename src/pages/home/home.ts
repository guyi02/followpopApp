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

  getData(data) {
    let newDate = new Date(data * 1000)
    let a = newDate.getDate()
    let b = newDate.getMonth() + 1
    let c = newDate.getFullYear()
    const DataNova = `${a}/${b}/${c}`
    return DataNova
  }



}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PainelProvider } from '../../providers/painel/painel';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  status: string = 'emProcesso'
  concluidos: Observable<any>
  cancelados: Observable<any>
  emProcesso: Observable<any>

  constructor(public navCtrl: NavController, private provider: PainelProvider) {
    this.concluidos = this.provider.getStatusConcluido()
    this.cancelados = this.provider.getStatusCancelados()
    this.emProcesso = this.provider.getStatusEmProcesso()

  }

  getPedido(id) {
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PainelProvider } from '../../providers/painel/painel';


@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes: any
  totalCli: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: PainelProvider) {
    this.clientes = this.provider.getAllUsers()
  }

  ionViewDidLoad() {
    this.clientes.forEach(element => {
      this.totalCli = element.length
    });
  }

  verCliente(id) {
    console.log(id);
  }

}

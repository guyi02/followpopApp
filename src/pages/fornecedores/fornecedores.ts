import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialpanelProvider } from '../../providers/socialpanel/socialpanel';
import { InstantismoProvider } from '../../providers/instantismo/instantismo';



@Component({
  selector: 'page-fornecedores',
  templateUrl: 'fornecedores.html'
})
export class FornecedoresPage {
  creditoSocial: any
  creditoInstantismo: any

  constructor(public navCtrl: NavController, private socialProv: SocialpanelProvider, private instantismoProv: InstantismoProvider) {
    this.socialProv.getCreditsSocial().subscribe(result => {
      this.creditoSocial = (Math.round(result.balance * 100) / 100).toFixed(2)
    })

    this.instantismoProv.getCreditsInstantismo().subscribe(res => {
      this.creditoInstantismo = (Math.round(res.balance * 100) / 100).toFixed(2)
    })
  }

  verTaxas() {
    this.navCtrl.push('MargenslucroPage')
  }

}

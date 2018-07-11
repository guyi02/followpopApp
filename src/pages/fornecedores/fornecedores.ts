import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialpanelProvider } from '../../providers/socialpanel/socialpanel';


@Component({
  selector: 'page-fornecedores',
  templateUrl: 'fornecedores.html'
})
export class FornecedoresPage {

  constructor(public navCtrl: NavController, private provider: SocialpanelProvider) {
    this.provider.getCredits().subscribe(result => console.log(result)
    )

  }

}

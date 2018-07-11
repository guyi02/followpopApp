import { Component } from '@angular/core';

import { PedidosPage } from '../pedidos/pedidos';
import { FornecedoresPage } from '../fornecedores/fornecedores';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PedidosPage;
  tab3Root = FornecedoresPage;
  tab4Root = FornecedoresPage;

  constructor() {

  }
}

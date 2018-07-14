import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { PedidosPage } from '../pages/pedidos/pedidos';
import { FornecedoresPage } from '../pages/fornecedores/fornecedores';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PainelProvider } from '../providers/painel/painel';
import { SocialpanelProvider } from '../providers/socialpanel/socialpanel';
import { HttpClientModule } from '@angular/common/http';
import { InstantismoProvider } from '../providers/instantismo/instantismo';
import { ClientesPage } from '../pages/clientes/clientes';

@NgModule({
  declarations: [
    MyApp,
    PedidosPage,
    FornecedoresPage,
    HomePage,
    TabsPage,
    ClientesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDfSvP2t2X9NNBYIwBCh4jK2JqYzj51mME",
      authDomain: "followpop-painel.firebaseapp.com",
      databaseURL: "https://followpop-painel.firebaseio.com",
      projectId: "followpop-painel",
      storageBucket: "followpop-painel.appspot.com",
      messagingSenderId: "3435177807"
    }),
    AngularFirestoreModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosPage,
    FornecedoresPage,
    HomePage,
    TabsPage,
    ClientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PainelProvider,
    SocialpanelProvider,
    InstantismoProvider
  ]
})
export class AppModule { }

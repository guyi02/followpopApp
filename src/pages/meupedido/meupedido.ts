import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-meupedido',
  templateUrl: 'meupedido.html',
})
export class MeupedidoPage {
  id: string
  itens: Observable<any[]>
  itensCollection: AngularFirestoreDocument<any>
  meuLink: any
  tipo: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController,
    private db: AngularFirestore) {

    this.id = this.navParams.data
  }


  ionViewDidLoad() {
    this.itensCollection = this.db.doc('pedidos/' + this.id)
    this.itens = this.itensCollection.valueChanges()
    this.itens.subscribe(s => {
      this.tipo = s['tipo'];
      this.meuLink = s['link'];
    })

  }
  showLink(link) {
    const alert = this.alert.create({
      title: 'Veja a Url!',
      subTitle: link,
      buttons: ['Fechar']
    });
    alert.present();
  }



}

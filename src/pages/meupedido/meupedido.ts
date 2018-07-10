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
    let alert = this.alert.create({
      title: 'O link está certo?',
      message: link,
      inputs: [
        {
          name: 'Link',
          placeholder: 'Novo Link'
        }
      ],
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        },
        {
          text: 'Corrigir',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    alert.present();
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PainelProvider } from '../../providers/painel/painel';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-meupedido',
  templateUrl: 'meupedido.html',
})
export class MeupedidoPage {
  id: string
  nome: string
  data: any
  link: string
  celular: string
  valor: number
  quantidade: number
  total: number
  status: string
  tipo: string
  servico: string


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController,
    private prov: PainelProvider,
    private db: AngularFirestore) {

    this.id = this.navParams.data

  }


  ionViewDidLoad() {
    this.getItem()
  }

  getItem() {
    let str = this.id
    const idStr = str.toString()
    const data = this.db.collection('pedidos/').doc(idStr)
      .valueChanges().subscribe(res => {
        this.data = res['data']
        this.nome = res['nome']
        this.link = res['link']
        this.celular = res['celular']
        this.valor = res['valor']
        this.quantidade = res['quantidade']
        this.total = res['total']
        this.status = res['status']
        this.tipo = res['tipo']
        this.servico = res['servico']
      })
  }

  showLink() {
    const alert = this.alert.create({
      title: 'Veja a Url!',
      subTitle: 'https://m.facebook.com/photo.php?fbid=1994968380575657/',
      buttons: ['Fechar']
    });
    alert.present();
  }


}

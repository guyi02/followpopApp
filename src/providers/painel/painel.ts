import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable()
export class PainelProvider {

  constructor(private db: AngularFirestore) {

  }

  getAll() {
    return this.db.collection('pedidos', ref => ref.orderBy('data', 'desc').where('status', '==', 'pendente'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }

  getAllUsers() {
    return this.db.collection('users', ref => ref.orderBy('nome', 'asc'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }

  getStatusConcluido() {
    return this.db.collection('pedidos', ref => ref.where('status', '==', 'concluido'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }
  getStatusEmProcesso() {
    return this.db.collection('pedidos', ref => ref.where('status', '==', 'emprocesso'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }
  getStatusCancelados() {
    return this.db.collection('pedidos', ref => ref.where('status', '==', 'cancelado'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }

  getStatusParcial() {
    return this.db.collection('pedidos', ref => ref.where('status', '==', 'parcial'))
      .snapshotChanges()
      .pipe(
        map(mapeado => {
          return mapeado.map(res => ({
            chave: res.payload.doc.id,
            ...res.payload.doc.data()
          }))
        })
      )
  }


}
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable()
export class PainelProvider {

  constructor(private db: AngularFirestore) {

  }

  getAll() {
    return this.db.collection('pedidos')
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
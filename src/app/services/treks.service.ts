import {inject, Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Trek} from "../models/Trek";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreksService {
  private store = inject(AngularFirestore);
  private readonly DB_NAME = "randos";
  public trek$ = this.store
    .collection<Trek>(this.DB_NAME)
    .snapshotChanges()
    .pipe(map(data => data.map( d => d.payload.doc)));

  async add(trek: Trek) {
    const obj: Trek = {
      title: trek.title,
      date: trek.date,
      data: trek.data,
      owner: trek.owner,
      tags: trek.tags,
      participants: trek.participants
    }

    await this.store.collection<Trek>(this.DB_NAME).add(obj);
    return Promise.resolve();
  }

  private accessResourceByuId(id: string) {
    return this.store.doc<Trek>(`${this.DB_NAME}/${id}`);

  }
  async update(id: string, trek: Trek) {
    await this.accessResourceByuId(id).update(trek);
    return Promise.resolve();
  }

  async delete(id: string) {
   await this.accessResourceByuId(id).delete();
   return Promise.resolve();
  }
}

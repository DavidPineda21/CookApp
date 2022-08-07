import { Injectable } from '@angular/core';
import { Receta } from './receta';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {
  RecetaListRef: AngularFireList<any>;
  RecetaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createReceta(apt: Receta) {
    return this.RecetaListRef.push({
      Titulo: apt.Titulo,
      Ingredientes: apt.Ingredientes,
      Proceso: apt.Proceso,
      Tiempo: apt.Tiempo,
      
    })
  }

  // Get Single
  getReceta(id: string) {
    this.RecetaRef = this.db.object('/receta/' + id);
    return this.RecetaRef;
  }

  // Get List
  getRecetaList() {
    this.RecetaListRef = this.db.list('/receta');
    return this.RecetaListRef;
  }

  // Delete
  deleteReceta(id: string) {
    this.RecetaRef = this.db.object('/receta/' + id);
    this.RecetaRef.remove();
  }
}
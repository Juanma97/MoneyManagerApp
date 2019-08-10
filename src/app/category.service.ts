import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private storage:Storage) { }

  saveCategory(category){
    return this.getAllCategories().then(result => {
      if(result){
        result.push(category);
        return this.storage.set(STORAGE_KEY, result);
      }else{
        return this.storage.set(STORAGE_KEY, [category]);
      }
    });
  }

  getAllCategories(){
    return this.storage.get(STORAGE_KEY);
  }
}

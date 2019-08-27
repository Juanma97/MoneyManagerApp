import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "first-time";

@Injectable({
  providedIn: 'root'
})
export class FirsTimeService {

  constructor(private storage:Storage) { 
    this.storage.set(STORAGE_KEY, true);
  }

  saveFirstTime() {
    this.storage.set(STORAGE_KEY, false);
  }

  isFirstTime() {
    this.storage.get(STORAGE_KEY).then(val => {
      return val;
    })
  }
}

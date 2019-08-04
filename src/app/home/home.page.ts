import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  salaryValue:number;

  constructor(private storage:Storage) {}

  saveSalary() {
    this.storage.set('salary', this.salaryValue).then(() => {
      alert("GUARDADO");
    })
    
  }
}

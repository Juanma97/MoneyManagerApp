import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  salaryValue:number = 0;
  errorSalary:boolean = false;

  constructor(private storage:Storage, private router: Router) {}

  saveSalary() {
    this.errorSalary = false;
    if(this.salaryValue > 0){
      this.storage.set('salary', this.salaryValue).then(() => {
        this.router.navigateByUrl('/dashboard');
      })
    }else{
      this.errorSalary = true;
    }
    
  }
}

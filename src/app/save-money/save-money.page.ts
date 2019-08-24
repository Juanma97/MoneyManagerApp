import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import * as moment from 'moment';

const STORAGE_KEY = "expensesSaved"

@Component({
  selector: 'app-save-money',
  templateUrl: './save-money.page.html',
  styleUrls: ['./save-money.page.scss'],
})
export class SaveMoneyPage implements OnInit {

  totalMonth:number = 0;
  totalYear:number = 0;
  nowDate = moment().format("DD/MM/YYYY").split("/");

  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.totalMonth = 0;
    this.totalYear = 0;
    
    this.storage.get(STORAGE_KEY).then(result => {
      for (var key in result){
        if(result[key].category == "Ahorro" && result[key].month == this.getMonth(parseInt(this.nowDate[1]))){
          console.log("Month if: ", result[key].value)
          this.totalMonth += parseInt(result[key].value);
        }

        if(result[key].category == "Ahorro" && result[key].year == this.nowDate[2]){
          this.totalYear += parseInt(result[key].value);
        }
      }
    })
  }

  getMonth(month) {
    switch(month){
      case 1:
        return "Enero";
        break;
      case 2: 
        return "Febrero";
        break;
      case 3: 
        return "Marzo";
        break;
      case 4:
        return "Abril";
        break;
      case 5: 
        return "Mayo";
        break;
      case 6:
        return "Junio";
        break;
      case 7:
        return "Julio";
        break;
      case 8:
        return "Agosto";
        break;
      case 9:
        return "Septiembre";
        break;
      case 10: 
        return "Octubre";
        break;
      case 11: 
        return "Noviembre";
      case 12: 
        return "December";
        break;
    }
  }

  goToExpenseForm() {
    this.router.navigateByUrl('/expense-form');
  }
  goToProfile() {
    this.router.navigateByUrl('/profile');
  }
  goToSaveMoney() {
    this.router.navigateByUrl('/save-money');
  }
  back(){
    this.router.navigateByUrl('/dashboard');
  }
}

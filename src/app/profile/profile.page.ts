import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import * as moment from 'moment';

const STORAGE_KEY = "expensesSaved"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  totalYear:number = 0;
  totalMonth:number = 0;
  percentageYear:number = 0;
  percentageMonth:number = 0;
  percentageYearProgress: string = "0";
  percentageMonthProgress: string = "0";
  nowDate = moment().format("DD/MM/YYYY").split("/");

  constructor(private router:Router, private storage:Storage) { }

  ionViewWillEnter(){
    this.storage.get(STORAGE_KEY).then(result => {
      for(var key in result) {
        if(result[key].month == this.getMonth(parseInt(this.nowDate[1]))){
          this.totalMonth += parseInt(result[key].value);
        }
        if(result[key].year == this.nowDate[2]){
          this.totalYear += parseInt(result[key].value);
        }
      }
      this.storage.get('salary').then(val => {
        this.percentageYear = Math.round((this.totalYear / (val * 12) * 100));
        this.percentageMonth = Math.round((this.totalMonth / val) * 100);
        this.percentageMonthProgress = (this.percentageMonth / 100).toString();
        this.percentageYearProgress = (this.percentageYear / 100).toString();
        console.log("pc year: ", this.percentageYearProgress);
        console.log("pc month: ", this.percentageMonthProgress);
      })
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

  back(){
    this.router.navigateByUrl('/dashboard');
  }
}

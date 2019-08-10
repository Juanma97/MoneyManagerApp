import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { ExpensesService } from '../expenses.service';

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;
  salary:number;
  expenses:any[] = [];
  categories:any = null;
  indexSlide:number = 0;

  constructor(private storage:Storage, private cdRef:ChangeDetectorRef, private router: Router,
              public expenseService:ExpensesService) { }

  ngOnInit() {
    this.storage.get('salary').then((val) => {
      this.salary = val;
      this.cdRef.detectChanges();
    });
    
  }

  ionViewWillEnter() {
    this.storage.get("expensesSaved").then((val) => {
      this.getTodayExpenses(val);
      console.log(this.expenses)
    });
  }

  getTodayExpenses(val){
    this.expenses = [];
    var nowDate = moment().format("DD/MM/YYYY").split("/")
    for(let value of val){
      if(value.day == parseInt(nowDate[0]) 
      && value.month == this.getMonth(parseInt(nowDate[1]))
      && value.year == parseInt(nowDate[2])){
        this.expenses.push(value);
      }
    }
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

  prev() {
    this.slides.slidePrev();
    this.slides.getActiveIndex().then((val) => {
      console.log("Index: ", val);
      this.indexSlide = val;
    })
  }

  next() {
    this.slides.slideNext();
    this.slides.getActiveIndex().then((val) => {
      console.log("Index: ", val);
      this.indexSlide = val;
    })
  }

  goToExpenseForm() {
    this.router.navigateByUrl('/expense-form');
  }
}

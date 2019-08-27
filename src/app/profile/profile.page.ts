import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import * as moment from 'moment';
import { CategoryService } from '../category.service';

const STORAGE_KEY = "expensesSaved"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  categoriesMap: Object[] = [];

  totalYear:number = 0;
  totalMonth:number = 0;
  percentageYear:number = 0;
  percentageMonth:number = 0;
  categories:any = null;
  allExpenses:any = null;
  percentageYearProgress: string = "0";
  percentageMonthProgress: string = "0";
  nowDate = moment().format("DD/MM/YYYY").split("/");
  months:any = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  constructor(private router:Router, 
    private storage:Storage, 
    private categoryService:CategoryService) { }

  ionViewWillEnter(){
    this.categoriesMap = [];
    this.totalMonth = 0;
    this.totalYear = 0;
    this.storage.get(STORAGE_KEY).then(result => {
      this.allExpenses = result;
      this.categories = this.getCategories();
      for(var key in result) {
        if(result[key].month == this.getMonth(parseInt(this.nowDate[1]))){
          this.totalMonth += parseInt(result[key].value);
        }
        if(result[key].year == this.nowDate[2]){
          this.totalYear += parseInt(result[key].value);
        }
      }
      this.storage.get('salary').then(val => {
        this.setPercentages(val)
      })
    })
  }
  
  setPercentages(val){
    this.percentageYear = Math.round((this.totalYear / (val * 12) * 100));
    this.percentageMonth = Math.round((this.totalMonth / val) * 100);
    this.percentageMonthProgress = (this.percentageMonth / 100).toString();
    this.percentageYearProgress = (this.percentageYear / 100).toString();
  }

  getCategories() {
    var count:number = 0;
    var categories = this.categoryService.getCategoriesDefault();
    for(var cat in categories){
      count = 0;
      for(var exp in this.allExpenses){
        if(this.checkCategoryAndMonth(categories, cat, exp)){
          count += parseInt(this.allExpenses[exp].value);
        } 
      }
      this.categoriesMap.push({category:categories[cat], value:count});
    }
  }

  checkCategoryAndMonth(categories, cat, exp){
    return this.allExpenses[exp].category == categories[cat] && 
          this.allExpenses[exp].month == this.getMonth(parseInt(this.nowDate[1]))
  }

  getMonth(month) { return this.months[month - 1] }

  goToExpenseForm() { this.router.navigateByUrl('/expense-form') }

  goToProfile() { this.router.navigateByUrl('/profile') }
  
  goToSaveMoney() { this.router.navigateByUrl('/save-money') }
  
  back(){ this.router.navigateByUrl('/dashboard') }
}

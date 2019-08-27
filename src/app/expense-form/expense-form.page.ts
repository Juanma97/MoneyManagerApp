import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesService } from '../expenses.service';
import { CategoryService } from '../category.service';
import { Storage } from '@ionic/storage';

import * as moment from 'moment';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.page.html',
  styleUrls: ['./expense-form.page.scss'],
})
export class ExpenseFormPage {

  title:string = "";
  nameExpense:string = "";
  valueExpense:number = 0;
  errorExpense:boolean = false;
  errorName:boolean = false;
  errorCategory:boolean = false;
  categoryValue:any = null;
  months:any = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  categories:any;

  constructor(private router:Router, 
              private expenseService:ExpensesService, 
              private categoryService:CategoryService) {
    this.categories = categoryService.getCategoriesDefault();
    console.log(this.categories)
    var date = moment().format("DD/MM/YYYY").split("/")
    this.title = "Gasto del día " + date[0] + " de " + this.getMonth(parseInt(date[1])) + " del " + date[2];
  }

  getMonth(month) {return this.months[month - 1]}

  closeForm() {
    this.router.navigateByUrl('/dashboard');
  }

  saveExpense() {
    this.errorCategory = false;
    this.errorExpense = false;
    this.errorName = false;
    var nowDate = moment().format("DD/MM/YYYY").split("/")
    if(this.valueExpense > 0 && this.nameExpense != '' && this.categoryValue != ''){
      var expense = {
        name: this.nameExpense,
        value: this.valueExpense,
        category: this.categoryValue,
        day: parseInt(nowDate[0]),
        month: this.getMonth(parseInt(nowDate[1])),
        year: parseInt(nowDate[2])
      }
      this.expenseService.saveExpense(expense).then(() => {
        this.router.navigateByUrl('/dashboard');
      })
    }
    if(this.valueExpense <= 0){
      this.errorExpense = true;
    }
    if(this.nameExpense == ''){
      this.errorName = true;
    }
    if(this.categoryValue == null){
      this.errorCategory = true;
    }
  }

}

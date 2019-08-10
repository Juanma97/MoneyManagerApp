import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesService } from '../expenses.service';

import * as moment from 'moment';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.page.html',
  styleUrls: ['./expense-form.page.scss'],
})
export class ExpenseFormPage implements OnInit {

  title:string = "";
  nameExpense:string = "";
  valueExpense:number = 0;

  constructor(private router:Router, public expenseService:ExpensesService) {
    var date = moment().format("DD/MM/YYYY").split("/")
    this.title = "Gasto del día " + date[0] + " de " + this.getMonth(parseInt(date[1])) + " del " + date[2];
  }

  ngOnInit() {
  }
 /** TODO: Change to array of months and return the position - 1 */
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

  closeForm() {
    this.router.navigateByUrl('/dashboard');
  }

  saveExpense() {
    console.log("Save expense");
    var expense = {
      name: this.nameExpense,
      value: this.valueExpense,
      category: "testCategory",
      day: 10,
      month: "Agosto"
    }
    this.expenseService.saveExpense(expense).then(() => {
      console.log("Expense saved")
      this.router.navigateByUrl('/dashboard');
    })
  }

}

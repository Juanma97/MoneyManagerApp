import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "expensesSaved"

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  

  constructor(private storage:Storage) { }

  saveExpense(expense) {
    return this.getAllExpenses().then(result => {
      if(result){
        result.push(expense);
        return this.storage.set(STORAGE_KEY, result);
      }else{
        return this.storage.set(STORAGE_KEY, [expense]);
      }
    });
  }

  deleteExpense(expense) {
    return this.getAllExpenses().then(result => {
      if (result) {
        var index = result.indexOf(expense.name);
        result.splice(index, 1);
        console.log(result);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  
  getAllExpenses() {
    return this.storage.get(STORAGE_KEY);
  }
}

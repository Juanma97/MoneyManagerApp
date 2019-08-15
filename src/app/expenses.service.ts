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
        var index = -1;
        for(var key in result){
          if(this.compareExpenses(result[key], expense)){
            index = parseInt(key)
          }
        }
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  compareExpenses(exp1, exp2){
    return exp1.name == exp2.name && exp1.value == exp2.value &&
            exp1.category == exp2.category && exp1.day == exp2.day &&
            exp1.month == exp2.month && exp1.year == exp2.year;
  }
  
  getAllExpenses() {
    return this.storage.get(STORAGE_KEY);
  }
}

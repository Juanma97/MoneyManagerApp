import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;
  salary:number;
  expenses:any = null;

  constructor(private storage:Storage, private cdRef:ChangeDetectorRef, private router: Router,
              public expenseService:ExpensesService) { }

  ngOnInit() {
    this.storage.get('salary').then((val) => {
      this.salary = val;
      this.cdRef.detectChanges();
    });
    
  }

  ionViewWillEnter() {
    console.log("Will Enter");
    this.storage.get("expensesSaved").then((val) => {
      this.expenses = val;
      console.log(this.expenses)
    });
  }

  prev() {
    this.slides.slidePrev();
  }

  next() {
    this.slides.slideNext();
  }

  goToExpenseForm() {
    this.router.navigateByUrl('/expense-form');
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.page.html',
  styleUrls: ['./edit-salary.page.scss'],
})
export class EditSalaryPage implements OnInit {

  salaryValue:number = 0;
  errorSalary:boolean = false;

  constructor(public modalCtrl: ModalController, private storage:Storage) { }

  ngOnInit() {
  }

  saveSalary() {
    this.errorSalary = false;
    if(this.salaryValue > 0) {
      this.storage.set('salary', this.salaryValue).then(() => {
        this.dismissModal();
      })
    }else{
      this.errorSalary = true;
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.page.html',
  styleUrls: ['./edit-salary.page.scss'],
})
export class EditSalaryPage implements OnInit {

  salaryValue:number;

  constructor(public modalCtrl: ModalController, private storage:Storage) { }

  ngOnInit() {
  }

  saveSalary() {
    this.storage.set('salary', this.salaryValue).then(() => {
      this.dismissModal();
    })
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

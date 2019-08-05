import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  salary:number;

  constructor(private storage:Storage, private cdRef:ChangeDetectorRef) { console.log("Constructor") }

  ngOnInit() {
    console.log("ngOnInit");
    this.storage.get('salary').then((val) => {
      console.log(this.salary);
      this.salary = val;
      console.log(this.salary);
      this.cdRef.detectChanges();
    });
  }
}

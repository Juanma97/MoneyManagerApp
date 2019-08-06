import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;
  salary:number;

  constructor(private storage:Storage, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.storage.get('salary').then((val) => {
      this.salary = val;
      this.cdRef.detectChanges();
    });
  }

  prev() {
    this.slides.slidePrev();
    console.log("prev")
  }

  next() {
    this.slides.slideNext();
    console.log("next")
  }
}

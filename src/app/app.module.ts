import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { ExpensesService } from './expenses.service';
import { EditSalaryPage } from './edit-salary/edit-salary.page';
import { FormsModule } from '@angular/forms';

import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobService } from './admob.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [EditSalaryPage],
  exports: [],
  imports: [
FormsModule,
  BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExpensesService,
    AdMobFree,
    AdmobService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

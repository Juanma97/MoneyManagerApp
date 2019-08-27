import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirsTimeService } from './firs-time.service';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "first-time";

@Injectable({
  providedIn: 'root'
})
export class FirstTimeGuard implements CanActivate {

  value:boolean = true;

  constructor(private router: Router, private firstTimeService:FirsTimeService, private storage:Storage) {
    this.storage.get(STORAGE_KEY).then(val => {
      this.value = val;
    })
  }
  

  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    if(!this.value){
      this.router.navigate['dashboard'];
      return false;
    }

    return true;

}
  
}

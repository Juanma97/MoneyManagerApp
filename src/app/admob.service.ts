import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';

import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: false,
    autoShow: false,
    id: "ca-app-pub-3535087308150372/8993564329"
  };
   
  constructor(private admobFree: AdMobFree, public platform: Platform) {
    platform.ready().then(() => {
 
      this.admobFree.interstitial.config(this.interstitialConfig);
      this.admobFree.interstitial.prepare()
        .then(() => {

        }).catch(e => alert(e));
    });

    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      this.admobFree.interstitial.prepare()
        .then(() => {
        }).catch(e => alert(e));
    });
   }

  InterstitialAd() {
    this.admobFree.interstitial.isReady().then(() => {
      this.admobFree.interstitial.show().then(() => {
      })
        .catch();
    })
      .catch();
  }

  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: false,
      id: "ca-app-pub-3535087308150372/9173086785"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
    }).catch(e => alert(e));
  }
}

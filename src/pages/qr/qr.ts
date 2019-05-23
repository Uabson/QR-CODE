import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {

  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner,
              private admobFree: AdMobFree,
    ) {
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }

  //banner
  showBanner() {

  const bannerConfig: AdMobFreeBannerConfig = {
    id: 'ca-app-pub-6691506595312480/1312489627',
    autoShow: true
   };
   this.admobFree.banner.config(bannerConfig);
   
   this.admobFree.banner.prepare()
     .then(() => {
       // banner Ad is ready
       // if we set autoShow to false, then we will need to call the show method here
     })
     .catch(e => console.log(e));
    }

}
import { Injectable } from '@angular/core';

import { BluetoothLE, ScanStatus, ScanParams } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BleScanService {

  params: any;


  constructor(public bluetoothle: BluetoothLE, public plt: Platform) {

    this.params = {
      "request": true,
      "statusReceiver": false,
      "restoreKey": "bluetoothleplugin"
    };

    this.plt.ready().then((readySource) => {
   
      console.log('Platform ready from', readySource);
      
   
     });
   }

 
   initialize(): Observable<any>{
    return this.bluetoothle.initialize();
  }

  startScan(): Observable<ScanStatus> {
    return this.bluetoothle.startScan(this.params);
  }

  stopScan(): Promise<any> {
    return this.bluetoothle.stopScan();
  }


}


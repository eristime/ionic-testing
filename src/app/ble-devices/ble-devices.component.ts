import { Component, OnInit } from '@angular/core';

import { BleScanService } from '../ble-scan.service'
import { ScanStatus } from '@ionic-native/bluetooth-le/ngx';

@Component({
  selector: 'app-ble-devices',
  templateUrl: './ble-devices.component.html',
  styleUrls: ['./ble-devices.component.scss'],
})
export class BleDevicesComponent implements OnInit {

  devices: ScanStatus[] = [];

  scanRunning: Boolean;
  constructor(private BleScanService: BleScanService) { }

  ngOnInit() {
    console.log(this.BleScanService);
    this.initialize();
  }

  initialize(): void {
    this.BleScanService.initialize().subscribe( r => console.log('result', r));
  }

  startScan(): void {
    this.BleScanService.startScan().subscribe( result => {
      this.devices.push(result);
      console.log(result);
    });
    this.scanRunning = true;
  }

  stopScan(): void {
    this.BleScanService.stopScan().then( result => console.log(result));
    this.scanRunning = false;
  }

}

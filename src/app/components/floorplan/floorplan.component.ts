import { Component, OnInit } from '@angular/core';

declare let steerpath: any ;

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss'],
})
export class FloorplanComponent implements OnInit {

  private STEERPATHAPIKEY: String = "eyJhbGciOiJSUzI1NiJ9.eyJpYXQ6IjoxNTY4MDI5MTc0LCJqdGkiOiJiYTlhYjA1NC1hODNjLTQwNWYtYmI0Mi0wZDE4MmMwYzAwYWEiLCJzY29wZXMiOiJ2Mi0zYWU0MTdiYS0wMzg3LTRlNzktYTUxOS03ZWU5MjE3NmRjNjgtcHVibGlzaGVkOnIiLCJzdWIiOiJ2Mi0zYWU0MTdiYS0wMzg3LTRlNzktYTUxOS03ZWU5MjE3NmRjNjgifQ.PpVIhgyZvSU00uz0IG42ii59_FNIZkkPDfCdHNbPUDFcSEvU9wRh0UPIax-fzMuoG7rYmJ4rMBn7v2TN3-dvb25lmfaUkQ53cWU_Fir8w1ljEL_1PnmtgtqDOO9KTWKXB4dwZjdUtMG8sJBD3WLanJJ94cS2Uk2J3_7fSgSr2gZU3JRBvrZVtWnriOItgM0sX08wJEN92iWNvpEQLDDTC32SEIt2GHQvBEuPex6QmUux3FALdN_NL73XTDsBqE11ZGFc2Cj6MVI70BX8peHeeT-0hPHg_02JrHOW4y7SXvX6buqzmyT8Kk1ikol7bWgewKIc5ZlOD1CNOqb77Da5qQ";
  private containerId = "map_container_id";

  constructor() { }

  ngOnInit() {
    var smartSDK = new steerpath.SmartSDK()
    smartSDK.start(this.STEERPATHAPIKEY)
    var smartMapView = new steerpath.SmartMapView(this.containerId, smartSDK)

    console.log(smartMapView);

  }

}







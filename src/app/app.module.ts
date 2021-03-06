import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

// add custom component declarations
import { MenuComponent } from './menu/menu.component'


//console.log(ItemsComponent);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BluetoothLE

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

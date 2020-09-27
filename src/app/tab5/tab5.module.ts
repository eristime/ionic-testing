import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';

import { ItemsComponent } from '../items/items.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule
  ],
  declarations: [Tab5Page, ItemsComponent, ItemDetailComponent]
})
export class Tab5PageModule {}

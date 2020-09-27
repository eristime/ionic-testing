import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  //getItems(): Item[] {
  //  return ITEMS;
  //}
  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}

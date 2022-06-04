import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

  @Input()
  items: Item[] = [];

  selectedIndex!: number;

  @Output()
  itemSelected: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: Item, index: number): void {
    this.selectedIndex = index;
    this.itemSelected.emit(item);
  }

}

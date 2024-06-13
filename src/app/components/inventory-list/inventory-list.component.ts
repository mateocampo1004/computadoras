
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  items: Item[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.inventoryService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(id: number): void {
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }

  editItem(id: number): void {
    // Implementa la lógica para editar el ítem
  }
}
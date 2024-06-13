import { Component, OnInit } from '@angular/core';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    InventoryFormComponent,
  ],
  styleUrls: ['./welcome.component.css']
  
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

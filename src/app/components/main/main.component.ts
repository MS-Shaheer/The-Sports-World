import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sportsData: any

  constructor(private orderService: OrderDetailsService) {
    
  }
  
  ngOnInit() {
    this.sportsData = this.orderService.sportsItems
  }
}

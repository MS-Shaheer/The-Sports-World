import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productID: any
  productData: any

  constructor(private params: ActivatedRoute, private orderService: OrderDetailsService) {
    
  }

  ngOnInit() {
    this.productID = this.params.snapshot.paramMap.get('id');

    if (this.productID) {
      this.productData = this.orderService.sportsItems.filter((value) => {
        return value.id == this.productID;
      })
    }
  }
}

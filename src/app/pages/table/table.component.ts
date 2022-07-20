import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

}

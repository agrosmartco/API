import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../models/products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  product: Products = {

    codigo: 0,
    descripcion: '',
    cantidad: 0,
    precio: 0,
    imagen: '',

  };
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts() {
    this.productService.getProducts().subscribe(
      res => {

        this.products = res;

      },
      err => console.log(err)

    )
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      res => {

        this.getProducts();

      },
      err => console.log(err)

    )

  }

}

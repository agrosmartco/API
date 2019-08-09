import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsform',
  templateUrl: './productsform.component.html',
  styleUrls: ['./productsform.component.css']
})
export class ProductsformComponent implements OnInit {

  products: any = [];
  edit: boolean = false;

  product: Products = {

    codigo: 0,
    descripcion: '',
    cantidad: 0,
    precio: 0,
    imagen: '',

  };

  constructor(private productService: ProductsService, private router: Router, private activateRout: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activateRout.snapshot.params;
    if (params.id) {

      this.productService.getOneProduct(params.id)
        .subscribe(
          res => {
            console.log(res);
         
            this.products = res;

            this.product = this.products;
           
            this.edit = true;

          },
          err => console.log(err)

        )
    }

  }

  saveNewProduct() {

    // delete this.product.codigo;

    console.log(this.product);
    
    this.productService.saveProduct(this.product)

      .subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/']);

        },
        err => console.log(err)

      )


  }

  
  updateProduct()
  {

    // delete this.product.create_at;

    // this.productService.up(this.product.codigo,this.products)
    //     .subscribe(
    //       res=>{
    //       console.log(res);
    //       this.router.navigate(['/']);

    //       },
    //       err=>console.error(err)
          
          
    //     )

  }

}

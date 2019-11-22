import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../../service/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addProductForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', [Validators.required, Validators.minLength(4)]]
  });


  constructor(private fb: FormBuilder,
              private productService: ProductsService,
              private router: Router) {
  }

  ngOnInit() {
  }

  get id() {
    return this.addProductForm.get('id');
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }

  addSuccess() {
    const product = this.addProductForm.value;
    this.productService.add(product);
    this.router.navigate(['/products']);
  }
}

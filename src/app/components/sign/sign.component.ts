import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  logForm!: FormGroup;
  submitted = false;
  shower = false;
  constructor(public formBuilder: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.logForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get f(): any {
    return this.logForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.logForm.invalid) {
      this.shower = true;
      return;
    }
    this.shower = false;
    localStorage.setItem('user', this.f.email.value);
    console.log(this.f.email.value, this.f.password.value);

    this.f.email.value === 'admin@admin.com' && this.f.password.value === 'admin'
      ? this.productsService.logSubject.next('ADMIN')
      : this.productsService.logSubject.next('SIGN IN');
  }
}

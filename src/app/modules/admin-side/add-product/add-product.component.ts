import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductItem } from 'src/app/models/product-item';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { ValidationService } from 'src/app/core/services/validation/validation.service';
import { AdminService } from 'src/app/core/services/users/admin/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [DatePipe]
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  imageUrl: string = "../../../../assets/products/unishop-logo.jpg"
  dateNow = new Date();
  paramID: any;

  data = {title: "Add Product"}

  constructor(
    private fb: FormBuilder,
     private adminServices: AdminService, 
     private toast: ToastrService,
     private datePipe: DatePipe,
     private route: ActivatedRoute,
     private validServices: ValidationService
     ) {
      this.route.queryParams.subscribe(data => {
        this.paramID = data['id']
      })

    this.productForm = this.fb.group({
      id: [''],
      category: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      date: [{value: this.datePipe.transform(this.dateNow), disabled: false } ],
      paymentType: ['', [Validators.required]],
      status: [true],
      customers: this.fb.array([]),
      sold: [0]
    })

    if(this.paramID) {
      this.adminServices.getProductById(parseInt(this.paramID)).subscribe(data => {
        this.productForm.patchValue(data[0]);
        this.imageUrl = "../../../../assets/products/" + data[0].image;
      })
    }

  }

  ngOnInit(): void {
    
  }

  viewImage(x: any) {
   if(x.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(x.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      this.productForm.get('image')?.patchValue(x.target.files[0].name)
   }

  }

  addProduct = (): any => {
    const productData = this.productForm.getRawValue() as ProductItem
    if(!productData.category || !productData.productName ||
      !productData.image || !productData.description ||
      !productData.price || !productData.quantity ||
      !productData.date || !productData.paymentType){
        return this.toast.error('Please fill-out all the fields')
      }
    if(this.paramID) {
      this.adminServices.editProduct(productData).subscribe()
    }else {
      this.adminServices.addProducts(productData).subscribe(x => {
        this.toast.success('New Product Added')
      });
    }
  }

  validateInput(event: any, comp: number) {
    this.validServices.numberOnly(event, comp)
  }


}
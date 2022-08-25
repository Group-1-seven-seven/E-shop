import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  paramID: any;
  value: any[] = []
  data = {
    title: "Product Details",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary",
    }
  ]
  }

  constructor(private route: ActivatedRoute, private adminServices: AdminService, private router: Router) {
    this.route.queryParams.subscribe(data => {
      this.paramID = data['id']
      
    })
    this.adminServices.getProductById(parseInt(this.paramID)).subscribe(data => {
      this.modifiedData(data[0])
    })

  }
  
  ngOnInit(): void {
  } 
  actionEmit = (data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add-product'])
    }
  }


  modifiedData = (data: any) => {
    let prop = Object.keys(data)
    prop.forEach(x => {
      console.log(x)
      if(x !== 'id'){
        if(data[x] instanceof Object && data[x].length !== 0){
          this.value.push({name: x,key: data[x], hasChild: true})
        }
        else {
          this.value.push({name: x,key: data[x], hasChild: false})
        }
      }
      
    })
  }

}

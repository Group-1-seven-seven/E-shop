import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/users/admin/admin.service';
import { UserService } from 'src/app/core/services/users/customer/user.service';
//import { User } from 'src/app/core/models/users.interface';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any;

  columns =[
    {key: "firstName", isSortable: false, dIcon: false},
    {key: "middleName", isSortable: false, dIcon: false}, 
    {key: "lastName", isSortable: false, dIcon: false},
    {key: "userName", isSortable: false, dIcon: false},
    {key: "email", isSortable: false, dIcon: false}, 
    {key: "contactNo", isSortable: false, dIcon: false},
    {key: "status", isSortable: false, dIcon: false, badge: true},
  ]

  buttons = [
    {type: "Deactivate", type2: "Activate",  bgColor: "btn-success"},
    {type: "View", type2: "View", bgColor: "btn-info"}
  ]
  
  constructor(private router: Router, 
    private adminservice: AdminService,
    private userService: UserService
    ) { 
    this.adminservice.getAllUsers().subscribe(data => {
      this.users = data.filter( user => user.role !== "admin")
    })
  }

  ngOnInit(): void {
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add-product'])
    }
  }

  tableAction(event: any) {
    
    if(event.type === "Deactivate") {
      event.status = !event.status
      this.userService.updateUserInfo(event).subscribe()
    }else if(event.type === "View") {
      this.router.navigate(['admin/product-details'], {queryParams: {id: event.id, type: "users"}})
    }
  }

}

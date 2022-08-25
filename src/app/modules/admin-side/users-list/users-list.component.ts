import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  data = {
    title: "Users"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  actionEmit = (data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add-product'])
    }
  }

}

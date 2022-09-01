import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from 'src/app/core/services/layout-sidebar/sidebar.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  sidebar = false
  isProfilePage = false
  constructor(private router: Router, private sidebarToggle:SidebarService) {
    this.router.events.subscribe(() => {
      this.isProfilePage = this.router.url.split('/').includes('profile')
    })

    this.sidebarToggle.getSidebar().subscribe(data => {
      this.sidebar = data
    })
   }

  ngOnInit(): void {  }

  toProfile(){
    this.setSidebar()
    document.getElementById("profile")?.scrollIntoView({behavior: "smooth"});
   }
   toAddress(){
    this.setSidebar()
    document.getElementById("addresses")?.scrollIntoView({behavior: "smooth"});
   }

   setSidebar =() =>{
    this.sidebarToggle.setValue(false)
   }

  
}

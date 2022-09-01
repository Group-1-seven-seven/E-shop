import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { SidebarService } from 'src/app/core/services/layout-sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // declare function toggleSidebar(): any;
  stickyHead: boolean = false;
  isLogin: boolean = false
  data = localStorage.getItem("user");
  credentials: any;
  userType: boolean = false
  totalItem : number = 0;
  sidebarTooglge = false;

  constructor(private router: Router, 
              private cartService: CartService, 
              private sidebar: SidebarService) {

    this.isLogin = localStorage.getItem("user") ? true : false
    if (this.isLogin) {
      this.userType = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?.role === 'admin' ||
      JSON.parse(JSON.parse(JSON.stringify(this.data))).role === "admin"
      ? true : false;
      this.credentials = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?? JSON.parse(JSON.parse(JSON.stringify(this.data)))
    }
  }

  ngOnInit(): void {
    this.totalItem = this.cartService.getCartCount()
    this.getSidebarStatus();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    this.stickyHead = pos > 100 ? true : false
  }

  toggle() {
    this.sidebar.setValue(!this.sidebarTooglge)
  }

  getSidebarStatus() {
    this.sidebar.getSidebar().subscribe(x => {
      this.sidebarTooglge = x
    })
  }

  logout() {
    this.isLogin = false
    localStorage.removeItem("user");
    this.router.navigate(['layout-pages/home']);
  }
}

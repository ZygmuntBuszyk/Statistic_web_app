import { Component, OnInit } from '@angular/core';
import { ERoutes } from '../_enums/routes.enum'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public links: Array<{}>;

  constructor() { 
    this.links = [];
    this.getRoutes();
    
  }

  ngOnInit(): void {
    console.log(this.links)
  }

  getRoutes() {
    Object.values(ERoutes)
    .map(value => this.links.push({
      name: value,
      routerLink: `/${value}`
    }))
  }
}

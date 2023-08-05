import { Component, OnInit } from '@angular/core';
import { MenuListModel } from 'src/app/_model/menulist/menu-list.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuList: MenuListModel[] = [
    {
      id: 1,
      title: 'Products',
      icon: null,
      subMenu: []
    },
    {
      id: 2,
      title: 'Teams',
      icon: null,
      subMenu: [
        {
          id: 201,
          title: 'team1',
          icon: null,
          subMenu: []
        },
        {
          id: 202,
          title: 'team2',
          icon: null,
          subMenu: []
        },
        {
          id: 203,
          title: 'team3',
          icon: null,
          subMenu: []
        },
      ]
    },
    {
      id: 3,
      title: 'Pricing',
      icon: null,
      subMenu: []
    },
    {
      id: 4,
      title: 'About',
      icon: null,
      subMenu: []
    },
    {
      id: 5,
      title: 'Contact',
      icon: null,
      subMenu: []
    },
    {
      id: 6,
      title: 'Resource',
      icon: null,
      subMenu: []
    },
  ]
  constructor() { }
  ngOnInit(): void {
  }

}

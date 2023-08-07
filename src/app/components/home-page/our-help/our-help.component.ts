import { Component, OnInit } from '@angular/core';
import { HelpListModel } from 'src/app/_model';

@Component({
  selector: 'app-our-help',
  templateUrl: './our-help.component.html',
  styleUrls: ['./our-help.component.scss']
})
export class OurHelpComponent implements OnInit {
  public helpList:HelpListModel[]=[
    {
      id:1,
      title:'UX Research',
      desc:'Descriptive Text(Optional)',
      icon:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:2,
      title:'Marketing',
      desc:'Descriptive Text(Optional)',
      icon:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:3,
      title:'PM',
      desc:'Descriptive Text(Optional)',
      icon:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:4,
      title:'Design',
      desc:'Descriptive Text(Optional)',
      icon:'/assets/svgs/placeholder-1.svg'
    },
  ]
  constructor() { }
  ngOnInit(): void {
  }

}

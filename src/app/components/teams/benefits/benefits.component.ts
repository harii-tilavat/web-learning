import { Component, OnInit } from '@angular/core';
import { BenefitListModel } from 'src/app/_model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit{
  public benefitList:BenefitListModel[]=[
    {
      id:1,
      title:'Better Particepent Experience',
      desc:'Some text would be nice here',
      icon:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:2,
      title:'Better Focus Researchers',
      desc:'Some text would be nice here',
      icon:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:3,
      title:'Improved internal collaboration',
      desc:'Some text would be nice here',
      icon:'/assets/svgs/placeholder-1.svg'
    },
  ]
  ngOnInit(): void {
  }

}

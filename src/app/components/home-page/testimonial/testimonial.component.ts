import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/_model';

@Component({
  selector: 'app-our-clients',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  public tesimonialList: TestimonialModel[] = [
    {
      id:1,
      title:'John Carter',
      subTitle:'Designer, Company',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fuga neque aliquid impedit explicabo',
      imagePath:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:2,
      title:'Sofia moore',
      subTitle:'UX Researcher Company',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fuga neque aliquid impedit explicabo',
      imagePath:'/assets/svgs/placeholder-1.svg'
    },
    {
      id:1,
      title:'Andy Smith',
      subTitle:'Founder Placeit',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, fuga neque aliquid impedit explicabo',
      imagePath:'/assets/svgs/placeholder-1.svg'
    },
  ]
  constructor() { }
  ngOnInit(): void {
  }

}

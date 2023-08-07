import { Component, OnInit } from '@angular/core';
import { ContentListModel } from 'src/app/_model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public contentList: ContentListModel[] = [
    {
      id:1,
      title:'Particepent Panel',
      subTitle:'Selective Filtered Audience',
      desc:'Conversion Driven by a better understand of your ideal customer personas and insights',
      imagepath:null
    },
    {
      id:2,
      title:'Unmoderated Testing',
      subTitle:'Qualtitative insights at the speed of survey',
      desc:'Scale up your researon without increasing time spent doing interviews-Reach wider audience, quicker and translate',
      imagepath:null
    },
    {
      id:3,
      title:'Interactive Feedback',
      subTitle:'Video conferencing reimagined for customer research',
      desc:'Better decision making with a conferencing tool designed to help researchers and participants focus on the interview',
      imagepath:null
    },
    {
      id:4,
      title:'Insight Hub',
      subTitle:'Simpler synthesis tools, built for collaboration',
      desc:'Higher conversions with tools designed to help you optimise products towards better digital experience',
      imagepath:null
    },
  ]
  constructor() { }
  ngOnInit(): void {

  }

}

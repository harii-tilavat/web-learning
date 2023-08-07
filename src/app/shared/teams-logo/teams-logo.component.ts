import { Component, OnInit } from '@angular/core';
import { LogoListModel } from 'src/app/_model';

@Component({
  selector: 'app-teams-logo',
  templateUrl: './teams-logo.component.html',
  styleUrls: ['./teams-logo.component.scss']
})
export class TeamsLogoComponent implements OnInit {
  public logoList: LogoListModel[] = [
    {
      id: 1,
      title: 'compny-1',
      logoPath: '/assets/images/compny-logo1.png'
    },
    {
      id: 2,
      title: 'compny-2',
      logoPath: '/assets/images/compny-logo2.png'
    },
    {
      id: 3,
      title: 'compny-3',
      logoPath: '/assets/images/compny-logo3.png'
    },
    {
      id: 4,
      title: 'compny-4',
      logoPath: '/assets/images/compny-logo4.png'
    },
    {
      id: 5,
      title: 'compny-5',
      logoPath: '/assets/images/compny-logo5.png'
    },
  ]
  constructor() { }
  ngOnInit(): void {

  }

}

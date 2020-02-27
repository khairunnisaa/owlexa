import { Component, OnInit } from '@angular/core';
// import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
// import { IEmployee } from 'ng2-org-chart';

@Component({
  selector: 'app-struktur-organisasi',
  templateUrl: './struktur-organisasi.component.html',
  styleUrls: ['./struktur-organisasi.component.scss']
})
export class StrukturOrganisasiComponent implements OnInit {
  nodes: any = [
    {
      name: 'Arya Damar',
      cssClass: 'directur',
      image: 'assets/images/svg/eye.svg',
      title: 'President Directur',
      childs: [
        {
          name: 'Yosi Widhayanti',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'General Manager of E-Health Strategic Business Unit',
        },
        {
          name: 'Tri Rahayu',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Operation Manager',
        },
        {
          name: 'Elvira Sofiyanti',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Provider Relation Manager',
        },
        {
          name: 'Angga Priyo Riyanto',
          cssClass: 'manager',
          image: 'assets/images/svg/eye.svg',
          title: 'Senior Manager IT & Infrastructure',
        }
      ]
    },
  ];


constructor() { }

  ngOnInit() {
  }

  test(event){

  }
}

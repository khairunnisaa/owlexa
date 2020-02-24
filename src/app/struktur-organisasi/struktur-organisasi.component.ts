import { Component, OnInit } from '@angular/core';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';

@Component({
  selector: 'app-struktur-organisasi',
  templateUrl: './struktur-organisasi.component.html',
  styleUrls: ['./struktur-organisasi.component.css']
})
export class StrukturOrganisasiComponent implements OnInit {
  orgData: OrgData= {
    name: "Arya Damar",
    type: 'President Director',
    children: [
      {
        name: "Yosi Widhayanti",
        type: 'General Manager of E-Health Strategic Business Unit',
        children: [ ]
      },
      {
        name: "Tri Rahayu",
        type: 'Operation Manager',
        children: [ ]
      },

      {
        name: "Angga Priyo Riyanto",
        type: 'Senior Manager IT & Infrastructure',
        children: []
      },

      {
        name: "Elvira Sofiyanti",
        type: 'Provider Relation Manager',
        children: []
      }
    ]
  };

constructor() { }

  ngOnInit() {
  }

}

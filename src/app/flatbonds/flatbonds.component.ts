import { Component, OnInit } from '@angular/core';

import FlatbondService from '../services/flatbond.service';

@Component({
  selector: 'app-flatbonds',
  templateUrl: './flatbonds.component.html',
  styleUrls: ['./flatbonds.component.scss']
})
export class FlatbondsComponent implements OnInit {

  constructor(public flatbondService: FlatbondService) {}

  flatbonds;
  dates = [];
  month: any;
  day: any;

  ngOnInit() {
    this.flatbondService.getFlatbonds().subscribe(flatbonds => {
      console.log(flatbonds);
      this.flatbonds = flatbonds;

      for (const flatbond of this.flatbonds ) {
        const date = new Date(flatbond.expiry_date);
        const year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();

        if (this.day < 10) {
          this.day = '0' + this.day;
        }
        if (this.month < 10) {
          this.month = '0' + this.month;
        }
        flatbond.expiry_date = this.day + ' / ' + this.month + ' / ' + year;
      }
    });
  }

  createFlatbond(flatbond) {
    this.flatbondService.getFlatbonds().subscribe(flatbonds => this.flatbonds.push(flatbond));
  }
}

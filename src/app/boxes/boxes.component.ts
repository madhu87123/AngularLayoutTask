import { Component, OnInit } from '@angular/core';
import { AddcardService } from '../services/addcard.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
Cards = [];

 constructor( private addCard: AddcardService, private router: Router, private route: ActivatedRoute) {

  }

ngOnInit() {
this.Cards = this.addCard.serviceCard;
// console.log(this.Cards);

  }
  idData(data) {
    this.router.navigate(['/card/edit', data.id ]);
  }
    sortDate() {
    return this.addCard.serviceCard.sort((a , b) => {
    return b.updatedDate - a.updatedDate;
    });
  }
}


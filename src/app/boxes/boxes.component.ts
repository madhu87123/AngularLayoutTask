import { Component, OnInit } from '@angular/core';
import { AddcardService } from '../services/addcard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
  Cards = [];
  showFirst = true;
  constructor(private addCard: AddcardService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.Cards = this.addCard.serviceCard;
    // console.log(this.Cards);

  }
  idData(data) {
    this.router.navigate(['/card/edit', data.id]);
  
    if(data.id != this.addCard.serviceCard){}
  }
  sortDate() {

    this.addCard.serviceCard.sort((a, b) => {

      return this.showFirst ? b.updatedDate - a.updatedDate : a.updatedDate - b.updatedDate;
    });
    this.showFirst = !(this.showFirst);
  }
}


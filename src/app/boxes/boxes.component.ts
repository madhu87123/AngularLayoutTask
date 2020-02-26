import { Component, OnInit } from '@angular/core';
import { AddcardService } from '../services/addcard.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
Cards = [];
//  image = "assets/images/reactjslogo.png";
  constructor( private addCard: AddcardService) {}

ngOnInit() {
this.Cards = this.addCard.serviceCard;
  }

}


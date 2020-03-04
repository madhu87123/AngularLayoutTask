import { Injectable } from '@angular/core';
import { CardInterface} from '../cardInterface';

@Injectable({
  providedIn: 'root'
})
export class AddcardService {
  serviceCard: CardInterface[];
  constructor( ) {
  this.serviceCard = [
  {
    id : 1 ,
    title : 'JAVASCRIPT',
    description : 'JS is programming language of HTML and Web.It is high-level language for computers.',
    logo : 'assets/images/js.jpg ',
    createdDate: new Date(),
    updatedDate : new Date()
},
{
  id : 2 ,
  title: 'NODEJS',
  description : 'Node.js is an open source server environment.It allows userto run JavaScript on the server.',
  logo : 'assets/images/nodejslogo.jpg',
  createdDate: new Date(),
  updatedDate : new Date(),
},
{
  id : 3 ,
title : 'REACTJS',
description : 'React is a JavaScript library for building user interfaces. It is used to build single page applications.',
logo : 'assets/images/reactjslogo.png',
createdDate: new Date(),
updatedDate : new Date()
}];
}
  addId(card) {
    const num = this.serviceCard.length;
    card.id = num + 1;
    card.createdDate = new Date();
    card.updatedDate = null;
    this.serviceCard.push(card);
    console.log(card);
   }
   getValues(id: number) {
  return this.serviceCard.find(index => index.id === id);
   }


}

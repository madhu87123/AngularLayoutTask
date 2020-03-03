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
  logo : 'assets/images/js.jpg '
},
{
  id : 2  ,
  title: 'NODEJS',
  description : 'Node.js is an open source server environment.It allows userto run JavaScript on the server.',
  logo : 'assets/images/nodejslogo.jpg'
},
{
  id : 3 ,
title : 'REACTJS',
description : 'React is a JavaScript library for building user interfaces. It is used to build single page applications.',
logo : 'assets/images/reactjslogo.png'
}];
   }
   addId(card) {
    const val = this.serviceCard.length;
    card.id = val + 1;
    this.serviceCard.push(card);
   }
   getValues(id: number) {
  return this.serviceCard.find(index => index.id === id);
   }
  //  deleteUser(id) {
  //    const inp = this.serviceCard.findIndex( item => item.id === id);
  //    this.serviceCard.splice(inp, 1);
  //    console.log(inp);
  //  }
}

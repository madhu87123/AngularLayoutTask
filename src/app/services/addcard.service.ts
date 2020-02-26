import { Injectable } from '@angular/core';
// import { cards } from '../home';
@Injectable({
  providedIn: 'root'
})
export class AddcardService {
  serviceCard = [{ title : 'JAVASCRIPT',
  description : 'JS is programming language of HTML and Web.It is high-level language for computers.',
  logo : 'assets/images/js.jpg '
},
{
  title: 'NODEJS',
  description : 'Node.js is an open source server environment.It allows userto run JavaScript on the server.',
  logo : 'assets/images/nodejslogo.jpg'
},
{
title : 'REACTJS',
description : 'React is a JavaScript library for building user interfaces. It is used to build single page applications.',
logo : 'assets/images/reactjslogo.png'
}];
  constructor() { }
}

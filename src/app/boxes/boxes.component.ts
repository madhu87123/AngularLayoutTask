import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
Cards = [
    { title : "JAVASCRIPT",
    description : "JS is programming language of HTML and Web.It is high-level language for computers.",
    logo : "assets/images/js.jpg ",
    button : "JS"
  },
  {
    title: "NODEJS",
    description : "Node.js is an open source server environment.It allows userto run JavaScript on the server.",
    logo : "assets/images/nodejslogo.jpg",
    button : "NODE"
  },
{
  title : "REACTJS",
  description : " React is a JavaScript library for building user interfaces. It is used to build single page applications.",
  logo : "assets/images/reactjslogo.png",
  button : "REACT"
}
];
  constructor() { }

  ngOnInit() {
  }

}

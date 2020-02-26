import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddcardService } from '../services/addcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor(private builder: FormBuilder, private addCard: AddcardService, private router: Router) { }
  registerForm: FormGroup;
  submitted = false;

  dataarray = [];

  ngOnInit() {
    this.registerForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      logo: ['']
    });

  }
  get val() {
    return this.registerForm.controls;
  }
  uploadimage(e) {
    console.log(e);
    // this.registerForm.controls['image'].setValue('/home/some/image.img');
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.addCard.serviceCard.push(this.registerForm.value);
    console.log(this.dataarray);
    this.router.navigate(['boxes']);
  }
}

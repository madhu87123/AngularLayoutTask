import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor(private builder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image : ['']
    });
  }
  get val() {
    return this.registerForm.controls;
  }
  uploadimage(e){
    console.log(e);
    // this.registerForm.controls['image'].setValue('/home/some/image.img');
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value, null, 5));
  }
}
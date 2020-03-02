import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AddcardService } from '../services/addcard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { idText } from 'typescript';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  title = this.addCard.serviceCard;
  public error = null;
  id: number;
  constructor(private builder: FormBuilder, private addCard: AddcardService, private router: Router, private route: ActivatedRoute) {  }
  ngOnInit() {
    this.registerForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      logo: [''],

    });
    if (this.router.url !== '/card') {
    this.route.paramMap.subscribe(data => {
       let id = +data.get('id');
       this.getValues(id);
      });
    }
  }
 getValues(id) {
this.registerForm.controls.title.setValue(this.addCard.getValues(id).title);
this.registerForm.controls.description.setValue(this.addCard.getValues(id).description);

 }
  get val() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.addCard.addId(this.registerForm.value);
    this.router.navigate(['boxes']);
  }
onUpdate(form : NgForm){
  this.registerForm.value(this.title)
  .subscribe(res => {
      this.router.navigate(['boxes']);
    }, (err) => {
      console.log(err);
    }
  );
 


//   this.title = this.registerForm.value;
//   this.router.navigate(['boxes']);
// //   console.log(this.title);
// //   this.registerForm.get('title').valueChanges.subscribe(
// //     title => {
// //     }
// //  );
}
deleteUser(id) {
 this.addCard.serviceCard.splice(id, 1);
}
  }

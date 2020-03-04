import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddcardService } from '../services/addcard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  // title: string;
  // description: string;
  // logo: string;
  id: number;
  mode: string;
  dateToday: Date;
  create: string;
  constructor(private builder: FormBuilder, private addCard: AddcardService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.registerForm = this.builder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      logo: [''],
    });
    this.route.data.subscribe((data: any) => {
      this.mode = data.mode;
    });
    if (this.mode !== 'add') {
      this.route.paramMap.subscribe(data => {
        this.id = +data.get('id');
        this.getValues(this.id);
      });
    }
  }
  getValues(id: number) {
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
  onUpdate(id: number) {
    const val = this.addCard.serviceCard.findIndex(item => item.id === id);
    const createdate =  this.addCard.serviceCard[val].createdDate;
    const create =  this.addCard.serviceCard[val].logo;
    this.addCard.serviceCard[val] = this.registerForm.value;
    this.addCard.serviceCard[val].id = this.id;
    console.log(val);
    console.log(id);
    this.addCard.serviceCard[val].logo = create;
    this.addCard.serviceCard[val].createdDate = createdate;
    this.addCard.serviceCard[val].updatedDate = new Date();
    this.router.navigate(['/boxes']);

  //  console.log(this.addCard.serviceCard);

  }
  deleteUser(id) {
    const inp = this.addCard.serviceCard.findIndex(item => item.id === id);
    this.addCard.serviceCard.splice(inp, 1);
  }

}

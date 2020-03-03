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
  dateToday: string;
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
    // this.addCard.getDate(this.dateToday);
    // console.log(this.dateToday);
    this.router.navigate(['boxes']);
  }


  onUpdate(id: number) {
    const val = this.addCard.serviceCard.findIndex(item => item.id === id);
    this.addCard.serviceCard[val] = this.registerForm.value;
    this.addCard.serviceCard[val].id = this.id;
    this.router.navigate(['/boxes']);
  }

  deleteUser(id) {
    const inp = this.addCard.serviceCard.findIndex(item => item.id === id);
    this.addCard.serviceCard.splice(inp, 1);
  }
  getDate(dateToday) {
    this.dateToday  = new Date().toISOString();
    console.log(dateToday );
  }
}

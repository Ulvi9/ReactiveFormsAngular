import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,this.requiredMailRu]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit(){
    if(this.form.valid){
      console.log(this.form);
      console.log(this.form.value);
    }
  }
  requiredMailRu(control: FormControl): {[s:string]:boolean}{

    if(!control.value.toLowerCase().includes("mail.ru".toLowerCase())){
      return {requiredMailRu: true};
    }
    return null;
  }
}

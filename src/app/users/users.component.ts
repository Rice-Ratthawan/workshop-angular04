import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  users = []; //Empty Array
  show = true; //show: boolean = true->show, false->not show
  selected = 0;
  submitted = false;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}  
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.maxLength(20)]],
      lastName: ['', Validators.required],
    })
  }
  
  get f() {
    return this.loginForm.controls;
  }

  saveData(): void {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    //String concat-> this.name=this.firstName+' '+this.lastName; 
    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`; //String template
    //Append to list/array
    this.users.push({name: fullName, status: false});
  }

  doToggle(index: number) {
    this.users[index].status = !this.users[index].status;
    this.selected = this.users.filter((u) => u.status).length;
  }
  
  
}

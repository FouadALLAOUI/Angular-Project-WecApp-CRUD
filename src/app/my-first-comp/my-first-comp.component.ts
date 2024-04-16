import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {

  name : string = ""; //not private
  email : string = "";
  message : string = "";
  isSubmeted : boolean = false;

  messages: Array<any> = [];

  onSubmit(){

    this.isSubmeted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages)

  }

  deleteMessage(index: number){
      this.messages.splice(index, 1)
  }


}

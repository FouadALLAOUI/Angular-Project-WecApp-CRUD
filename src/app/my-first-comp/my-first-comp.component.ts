import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

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

  constructor( //construct injection
    private service: MyFirstService
  ){
      this.messages = this.service.getAllMessages();
      this.isSubmeted = this.messages.length > 0;
  }

  onSubmit(){

    this.isSubmeted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages)

  }

  deleteMessage(index: number){
      this.service.deleteMessage(index);
  }


}

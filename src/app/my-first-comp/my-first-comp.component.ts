import { Component, inject } from '@angular/core';
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
  private service: MyFirstService = inject(MyFirstService) //property injection

  constructor( 
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

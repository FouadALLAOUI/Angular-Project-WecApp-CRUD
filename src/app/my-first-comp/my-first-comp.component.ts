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

  onSubmit(){

    console.log(this.name, this.email, this.message);

  }


}

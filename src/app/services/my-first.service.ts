import { Injectable } from '@angular/core';

@Injectable()  // Dependency injection
export class MyFirstService {

  messages: Array<any> = [];
  
  constructor() {
    this.init();
  }

  init(): void{
    this.insert({
      name: "RIO",
      email: "rio@gmail.com",
      message:"lkjfmoireaoireaj"
    });
    this.insert({
      name: "PAW",
      email: "rio@gmail.com",
      message:"lkjfmoireaoireaj"
    });
    this.insert({
      name: "JEN",
      email: "rio@gmail.com",
      message:"lkjfmoireaoireaj"
    });

  }

  insert(message: {name: string, email: string, message: string}){
    this.messages.push(message);
  }

  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index: number){
    this.messages.splice(index, 1);
  }


}

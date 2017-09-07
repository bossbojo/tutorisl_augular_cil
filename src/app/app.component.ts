import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr = [
    {id:1,name:'A',email:'A@hotmail.com'},
    {id:2,name:'B',email:'B@hotmail.com'},
    {id:3,name:'C',email:'C@hotmail.com'},
    {id:4,name:'D',email:'D@hotmail.com'},
    {id:5,name:'E',email:'E@hotmail.com'},
    {id:6,name:'F',email:'F@hotmail.com'},
    {id:7,name:'G',email:'G@hotmail.com'},
    {id:8,name:'H',email:'H@hotmail.com'}    
  ];
  Newitem:any;
  constructor(){
    this.testAsyc().then((res)=>{
      console.log('a');
    })
    
  }
  OnsendData(item){
    this.arr.push(item);
    
  }


  testAsyc(){
    return new Promise((res)=>{
      var test = null;
      setTimeout(()=>{
        test = 'hello';
      },2000);
    });
  }
}




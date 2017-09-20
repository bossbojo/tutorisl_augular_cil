import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {
  hello_user = localStorage.getItem('authen')
  constructor() {
   }

  ngOnInit() {
  }
  Onsubmit(text){
    if(text.trim()){
      alert(text);
    }
  }

}

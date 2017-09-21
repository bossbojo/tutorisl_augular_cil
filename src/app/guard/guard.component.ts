import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {
  hello_user = localStorage.getItem('authen');
  massage;
  constructor() {
  }

  ngOnInit() {
  }
  Onsubmit(massage) {
    event.preventDefault();
    if (massage.value.trim()) {
      alert(massage.value);
      localStorage.removeItem('text');
    }
    massage.value = null;
  }
  setValue(envet) {
    this.massage = envet;
    localStorage.setItem('text', this.massage);
  }

}

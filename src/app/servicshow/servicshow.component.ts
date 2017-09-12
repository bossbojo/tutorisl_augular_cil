import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-servicshow',
  templateUrl: './servicshow.component.html',
  styleUrls: ['./servicshow.component.css']
})
export class ServicshowComponent implements OnInit {
  item: any;
  constructor(private service: AppService) {
    this.item = this.service.getData;
  }

  ngOnInit() {
  }
  OnRemove(items) {
    var person = prompt("set time delete", "");
    if (person == null || person == "") {
      alert('null time')
    } else {
      setTimeout(() => {
        this.service.deleteData(items)
      }, parseInt(person)*1000);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { transition,trigger,style,state,animate} from '@angular/animations';
import { AppAnimation } from '../app.animation';
@Component({
  selector: 'app-servicshow',
  templateUrl: './servicshow.component.html',
  styleUrls: ['./servicshow.component.css'],
  animations : [AppAnimation]
})
export class ServicshowComponent implements OnInit {
  item: any;
  btn = 'active';
  constructor(private service: AppService) {
    this.item = this.service.getData;
  }

  ngOnInit() {
  }
  OnRemove(items) {
    this.service.deleteData(items)

  }

}

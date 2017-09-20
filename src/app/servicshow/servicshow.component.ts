import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { transition,trigger,style,state,animate} from '@angular/animations';
import { AppAnimation } from '../app.animation';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicshow',
  templateUrl: './servicshow.component.html',
  styleUrls: ['./servicshow.component.css'],
  animations : [AppAnimation]
})
export class ServicshowComponent implements OnInit {
  item: any;
  btn = 'active';
  hello;
  constructor(private service: AppService,private getpa:ActivatedRoute) {
    this.item = this.service.getData;
    this.getpa.queryParams.forEach((res) => {
      this.hello = res.hello;
    })
  }

  ngOnInit() {
  }
  OnRemove(items) {
    this.service.deleteData(items)

  }

}

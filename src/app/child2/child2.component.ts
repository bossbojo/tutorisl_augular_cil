import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @Input('getItem') item:any[]=[];
  @Input('getItemChange') getItemChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  OnRemove(items){
  this.item = this.item.filter(res => res != items);
  console.log(this.item);
  this.getItemChange.emit(this.item)
  }

}

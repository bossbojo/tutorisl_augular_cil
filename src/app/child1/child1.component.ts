import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 @Output('onCeate') onCeate = new EventEmitter();
  constructor(private serve:AppService) {

   }

  ngOnInit() {
  }
  Onsubmit(event:Event){
     event.preventDefault();
    let form = <any>event.target;
    let model = {
      id:form.id.value,
      name:form.name.value,
      email:form.email.value
    }
    this.onCeate.emit(model);
    form.id.value = null;
    form.name.value = null;
    form.email.value = null;

  }
}

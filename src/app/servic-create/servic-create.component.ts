import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servic-create',
  templateUrl: './servic-create.component.html',
  styleUrls: ['./servic-create.component.css']
})
export class ServicCreateComponent implements OnInit {
  paramat;
  name;
  constructor(private service:AppService,private route:Router,private param:ActivatedRoute) { 
    
    this.param.params.forEach(param => {
      this.paramat = param.id;
    });
    this.param.data.forEach(param => {
      this.name = param.name;
      console.log(this.name);
      
    });
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
   this.service.addData(model);
   form.id.value = null;
   form.name.value = null;
   form.email.value = null;
   this.route.navigate(['/','show'],{ queryParams: { hello:'sendtopage'} });
 }
}

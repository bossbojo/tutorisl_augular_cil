import { Injectable } from '@angular/core';
@Injectable()
export class AppService{
    public time = null;
    private time1;
    protected time2; 
    private arr = [
        { id: 1, name: 'A', email: 'A@hotmail.com' },
        { id: 2, name: 'B', email: 'B@hotmail.com' },
        { id: 3, name: 'C', email: 'C@hotmail.com' },
        { id: 4, name: 'D', email: 'D@hotmail.com' },
        { id: 5, name: 'E', email: 'E@hotmail.com' },
        { id: 6, name: 'F', email: 'F@hotmail.com' },
        { id: 7, name: 'G', email: 'G@hotmail.com' },
        { id: 8, name: 'H', email: 'H@hotmail.com' }
      ];
      public get getData(){
          return this.arr;
      }
      public addData(data){  
        this.arr.push(data)
      }
      public deleteData(data){
          this.arr.splice(this.arr.findIndex(x => x == data), 1);
      }
}
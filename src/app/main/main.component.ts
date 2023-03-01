
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent 
{
  @Input() data:Array<{id:number,Project:string,ClientName:string,startDate:string,endDate:string,status:string}>=[]
  @Output()statusChanged : EventEmitter<{index:number,value:string,reason:string}>=new EventEmitter<{index:number,value:string,reason:string}>()
  onChange(index:number,value:any,previousvalue:string){
    if(value.target.value==2)
    {
      const msg:any=prompt("Why do want to change status")
      console.log(msg)
      if(msg===null || msg==''){
        value.target.value=previousvalue
      } 
      else{
        this.statusChanged.emit({index:index,value:value.target.value,reason:msg});
        alert("Status updated")
      }
    }
    else{
       this.statusChanged.emit({index:index,value:value.target.value,reason:""});
       alert("Status updated successfully")
    }
    
  }
}

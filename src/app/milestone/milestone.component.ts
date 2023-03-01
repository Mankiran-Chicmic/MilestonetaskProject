
import { Component,OnInit} from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit{
  array:Array<{id:number,Project:string,ClientName:string,startDate:string,endDate:string,status:string}>=[]

  constructor(private http : HttpClient){}
 
  onStatusChange(eventData:any){
    this.array[eventData.index-1].status=(eventData.target as HTMLInputElement).value
    this.http.put('http://localhost:3000/task/'+eventData.index+'',this.array[eventData.index-1]).subscribe((res)=>{
      console.log(res)
    })
  }

  fetchDataMilestone(){
    this.http.get("http://localhost:3000/task")
    .subscribe((res:any)=>{
       this.array=res
    });
  }
  ngOnInit(): void {
    this.fetchDataMilestone();
  }
}

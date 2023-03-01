import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  array:Array<{id:number,Project:string,ClientName:string,startDate:string,endDate:string,status:string}>=[]

  constructor(private http : HttpClient){}

  onStatusChange(eventData:any){
    this.array[eventData.index-1].status=eventData.value
    this.http.put('http://localhost:3000/task/'+eventData.index+'',this.array[eventData.index-1]).subscribe((res)=>{
      console.log(res)
    })
  }

  fetchDataTask(){
    this.http.get("http://localhost:3000/task")
    .subscribe((res:any)=>{
       this.array=res
    });
  }

  ngOnInit(): void {
    this.fetchDataTask();
  }
}

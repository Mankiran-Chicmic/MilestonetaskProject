import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilestoneComponent } from './milestone/milestone.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path:'milestone',
    component:MilestoneComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'task',
    component:TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

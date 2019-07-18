import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DepartmentcontentComponent } from './departmentcontent/departmentcontent.component';
import { ItemcontentComponent } from './itemcontent/itemcontent.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:" ",component:HomeComponent},
  {path:"departmentcontent/:id",component:DepartmentcontentComponent},
  { path:"itemcontent/:id",component:ItemcontentComponent},

  { path: '', redirectTo: '/departmentcontent/61', pathMatch: 'full' },
  {path:"**",component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

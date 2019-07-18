import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department=new department();
  departments:department[]=[];
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://api.mohamed-sadek.com/News/Departments").subscribe(
      response=> {
        this.departments=(response as department[]).filter(ww=>ww.ShowInMainMenu==true);
      }
      )
  }
 
}

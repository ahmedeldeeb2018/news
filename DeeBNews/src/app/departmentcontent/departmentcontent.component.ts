import { Component, OnInit } from '@angular/core';
import { news } from '../topnews/topnews.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-departmentcontent',
  templateUrl: './departmentcontent.component.html',
  styleUrls: ['./departmentcontent.component.css']
})
export class DepartmentcontentComponent implements OnInit {
  deptcontent:news[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute , private _HttpClient:HttpClient ) { 
    this._ActivatedRoute.paramMap.subscribe(parmap=>{
      let newID=+parmap.get('id');
      this.get(newID);
    })
  }

  ngOnInit() {
    
  }
  get(newID: number) {
    this._HttpClient.get(`http://api.mohamed-sadek.com/News/Department/${newID}`).subscribe(
      response => { 
        this.deptcontent = response as news[]
      })
    }

}

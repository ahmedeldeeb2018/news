import { Component, OnInit } from '@angular/core';
import { news } from '../topnews/topnews.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itemcontent',
  templateUrl: './itemcontent.component.html',
  styleUrls: ['./itemcontent.component.css']
})
export class ItemcontentComponent implements OnInit {
  itemcontent:news[]=[];
  detail:news=new news();
  constructor( private _ActivatedRoute:ActivatedRoute,private _HttpClient:HttpClient ) { 
    _ActivatedRoute.paramMap.subscribe(parmap=>{
      let newID=+parmap.get("id");
      this.gett(newID);
    })
  }

  gett(newID:number)
  {
    this._HttpClient.get(`http://api.mohamed-sadek.com/News/item/${newID}`).subscribe(
      response=>{
        this.detail=response as news;
      }
    )
  }

  ngOnInit() {
  }

}

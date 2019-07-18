import { Component, OnInit } from '@angular/core';
import { news } from '../topnews/topnews.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featurednews',
  templateUrl: './featurednews.component.html',
  styleUrls: ['./featurednews.component.css']
})
export class FeaturednewsComponent implements OnInit {
  featurnews:news[]=[];
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://api.mohamed-sadek.com/News/FeaturedNews").subscribe(
      respons=>{
        this.featurnews=(respons as news[]);
      }
    )
  }

}

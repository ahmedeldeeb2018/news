import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { news } from './topnews.model';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {
  topNews:news[]=[];
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://api.mohamed-sadek.com/News/TopNews").subscribe(
      response => {this.topNews = response as news[]})
  }

}

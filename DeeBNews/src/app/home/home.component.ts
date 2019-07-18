import { Component, OnInit } from '@angular/core';
import { news } from '../topnews/topnews.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastNews:news[]=[];
  home=new news();
  constructor(private _HttpClient:HttpClient) { }

  ngOnInit() {
    this._HttpClient.get("http://api.mohamed-sadek.com/News/TopNews").subscribe(
      response => { this.lastNews = (response as news[]).slice(1,3)
  } )}

}

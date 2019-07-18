import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DepartmentComponent } from './department/department.component';
import { LeftsideComponent } from './shared/leftside/leftside.component';
import { RighttsideComponent } from './shared/righttside/righttside.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { FeaturednewsComponent } from './featurednews/featurednews.component';
import { DepartmentcontentComponent } from './departmentcontent/departmentcontent.component';
import { ItemcontentComponent } from './itemcontent/itemcontent.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DepartmentComponent,
    LeftsideComponent,
    RighttsideComponent,
    TopnewsComponent,
    FeaturednewsComponent,
    DepartmentcontentComponent,
    ItemcontentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

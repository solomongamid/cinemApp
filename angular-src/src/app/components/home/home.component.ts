import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  //which id will be deleted
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  articles = [];
  fetchData = function(){
  	this.http.get('http://localhost:5555/article').subscribe(
  			(res: Response) => {
  				this.articles = res.json();
  			}
  		)
  }


  ngOnInit() {
  	this.fetchData();
  }

}

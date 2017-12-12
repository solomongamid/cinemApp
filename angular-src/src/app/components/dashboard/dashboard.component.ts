import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  deleteArticle = function(id){
    if(confirm('Are you sure')){
      const url = `${"http://localhost:5555/article"}/${id}`;
      return this.http.delete(url, {headers : this.headers}).toPromise()
      .then(()=>{ 
        this.fetchData();
      });
    }
  }

  ngOnInit() {
    this.fetchData();
  }
  

}

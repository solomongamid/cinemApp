import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

	id:number;
	data:object = {};
	articles = [];
	articleObj:object = {};

	private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
  	private router: Router,
  	private http: Http,
  	private route: ActivatedRoute
  	) { }

  UpdateArticle(article){
  	this.articleObj = {
  		'title': article.title,
  		'body': article.body
  	};
  const url = `${"http://localhost:5555/article"}/${this.id}`;
  this.http.put(url, JSON.stringify(this.articleObj), {headers: this.headers})
  .toPromise()
  .then(() => {
  	this.router.navigate(['/dashboard']);
  })

  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id = +params['id'];
  	});

  	this.http.get('http://localhost:5555/article').subscribe(
		(res: Response) => {
			this.articles = res.json();
			for(var i = 0; i < this.articles.length; i++){
				if(parseInt(this.articles[i].id) === this.id){
					this.data = this.articles[i];
					break;
				}
			}
		}
	)

  }

}

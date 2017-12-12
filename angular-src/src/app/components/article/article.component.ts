import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New article has been added!";
  isAdded: boolean = false;

  articleObj:object = [];

  addNewArticle = function(article){
  	this.articleObj = {
  		"title": article.title,
  		"body": article.body
  	}
  	this.http.post('http://localhost:5555/article', this.articleObj).subscribe((res:Response) => {
  		this.isAdded = true;
  	});
  }

  ngOnInit() {
  }

}

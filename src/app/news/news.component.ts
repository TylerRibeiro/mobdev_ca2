import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  newsArticles: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchNewsArticles();
  }

  fetchNewsArticles() {
    const url = `${environment.API_URL_NEWS}top-headlines?country=us&apiKey=${environment.API_KEY_NEWS}`;
    this.http.get<any>(url).subscribe((response) => {
      this.newsArticles = response.articles;
    });
  }
}

import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`)
      .subscribe((results) => {
        console.log(results);
      });
  }
}

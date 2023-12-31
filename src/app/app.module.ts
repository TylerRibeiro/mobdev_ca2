import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; // import FormsModule
import { WeatherComponent } from "./weather/weather.component";
import { NewsComponent } from "./news/news.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [AppComponent, WeatherComponent, NewsComponent, AboutComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // add FormsModule to imports
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

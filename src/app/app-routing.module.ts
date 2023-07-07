import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "./news/news.component";
import { WeatherComponent } from "./weather/weather.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "weather", component: WeatherComponent },
  { path: "about", component: AboutComponent },
  {
    path: "tabs",
    loadChildren: () => import("./tabs/tabs.module").then((m) => m.TabsModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

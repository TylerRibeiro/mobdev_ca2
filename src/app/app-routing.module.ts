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
    loadChildren: () => import("./tabs/tabs.module").then((m) => m.TabsModule), // Import TabsModule instead of TabsPageModule
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("./tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("./tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
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
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

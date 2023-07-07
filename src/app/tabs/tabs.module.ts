import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "",
        redirectTo: "tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, IonicModule],
  exports: [RouterModule],
  declarations: [TabsComponent], // Make sure to declare your TabsComponent
})
export class TabsModule {} // Export as TabsModule

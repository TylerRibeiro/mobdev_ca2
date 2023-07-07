import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";

const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // Use Tab1PageModule here
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule), // Use Tab2PageModule here
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
    redirectTo: "tab1",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsModule {}

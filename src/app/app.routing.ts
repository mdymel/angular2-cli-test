import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "lazy", loadChildren: "app/lazy/lazy.module#LazyModule" },
];

export const routing = RouterModule.forRoot(appRoutes);

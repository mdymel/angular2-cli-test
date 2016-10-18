import {Routes, RouterModule} from "@angular/router";
import {LazyComponent} from "./lazy.component";


const appRoutes: Routes = [
  { path: "", component: LazyComponent }
];

export const routing = RouterModule.forChild(appRoutes);


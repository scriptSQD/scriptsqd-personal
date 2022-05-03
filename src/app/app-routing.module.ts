import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FofComponent } from "./fof/fof.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    // should always be last
    { path: "**", pathMatch: "full", component: FofComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: "enabledBlocking",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

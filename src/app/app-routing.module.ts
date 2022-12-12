import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { FofComponent } from "./fof/fof.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { WrapperComponent } from "./wrapper/wrapper.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "",
        component: WrapperComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "about", component: AboutComponent },
            {
                path: "projects",
                component: ProjectsComponent,
            },
            // should always be last
            { path: "**", pathMatch: "full", component: FofComponent },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: "enabledBlocking",
            scrollPositionRestoration: "top",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

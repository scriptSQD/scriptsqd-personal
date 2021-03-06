import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FofComponent } from "./fof/fof.component";
import { GlassmoprhCardComponent } from "./components/glassmorph-card/glassmorph-card.component";
import { GlassmorphProjectCardComponent } from "./components/glassmorph-project-card/glassmorph-project-card.component";
import { IsVisibleDirective } from "./directives/is-visible.directive";
import { IsloadingDirective } from "./directives/isloading.directive";
import { LoaderSpinnerComponent } from "./components/loader-spinner/loader-spinner.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AboutComponent } from "./about/about.component";
import { ScrolleerComponent } from "./components/scrolleer/scrolleer.component";
import { ScrolleerSlideDirective } from "./directives/scrolleer-slide.directive";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectCardComponent } from "./components/project-card/project-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        HomeComponent,
        AppComponent,
        FofComponent,
        GlassmoprhCardComponent,
        GlassmorphProjectCardComponent,
        IsVisibleDirective,
        IsloadingDirective,
        LoaderSpinnerComponent,
        AboutComponent,
        ScrolleerComponent,
        ScrolleerSlideDirective,
        ProjectsComponent,
        ProjectCardComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "serverApp" }),
        AppRoutingModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerWhenStable:30000",
        }),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

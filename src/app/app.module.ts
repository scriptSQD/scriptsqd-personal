import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FofComponent } from "./fof/fof.component";
import { GlassmoprhCardComponent } from "./components/glassmorph-card/glassmorph-card.component";
import { GlassmorphProjectCardComponent } from "./components/glassmorph-project-card/glassmorph-project-card.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
    declarations: [
        HomeComponent,
        AppComponent,
        FofComponent,
        GlassmoprhCardComponent,
        GlassmorphProjectCardComponent,
        AboutComponent,
        ProjectsComponent,
        WrapperComponent,
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
        SwiperModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}

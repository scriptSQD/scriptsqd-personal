import { Component, ViewChild } from "@angular/core";
import { PaginationOptions, SwiperOptions } from "swiper/types";
import { BreakpointObserver } from "@angular/cdk/layout";
import { projects, skills } from "./dataset";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Pagination, Navigation]);

const NAVIGATION_QUERY = "(min-width: 640px)";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
    @ViewChild("swiper")
    private swiper!: SwiperComponent;

    navigationEnabled: boolean;

    paginationOptions: PaginationOptions = {
        enabled: true,
        clickable: true,
        type: "bullets",
        bulletClass: "swiper_dot",
        bulletActiveClass: "swiper_dot_active",
        horizontalClass: "swiper_pag",
    };

    swiperOptions: SwiperOptions;

    skills = skills;
    projects = projects;

    constructor(public readonly breakpointObserver: BreakpointObserver) {
        this.navigationEnabled = breakpointObserver.isMatched(NAVIGATION_QUERY);
        breakpointObserver.observe(NAVIGATION_QUERY)
            .subscribe({
                next: (state) => {
                    if (!this.swiper)
                        return;

                    this.navigationEnabled = state.matches;
                    this.swiper.updateSwiper({ navigation: this.navigationEnabled });
                },
            });

        this.swiperOptions = {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            pagination: this.paginationOptions,
            navigation: this.navigationEnabled,
        };
    }
}

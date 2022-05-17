import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { Project } from "./project.interface";
import { Skills } from "./skills.interface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    constructor(private bpo: BreakpointObserver) {
        this.bpo.observe("(min-width: 710px)").subscribe({
            next: query => {
                if (query.matches) this.wide = true;
                else this.wide = false;
            },
        });
    }

    wide: boolean = false;

    skills: Skills = {
        front: [
            {
                icon: "/assets/icons/angular.svg",
                tooltip: "Angular v13+",
            },
            {
                icon: "/assets/icons/tailwindcss.svg",
                tooltip: "Tailwind CSS",
            },
        ],
        back: [
            {
                icon: "/assets/icons/nestjs.svg",
                tooltip: "NestJS",
            },
            {
                icon: "/assets/icons/strapi.svg",
                tooltip: "Strapi",
            },
        ],
        general: [
            {
                icon: "/assets/icons/mongodb.svg",
                tooltip: "MongoDB",
            },
            {
                icon: "/assets/icons/git.svg",
                tooltip: "Git / GitHub",
            },
            {
                icon: "/assets/icons/linux.svg",
                tooltip: "Linux (kernel and Arch Distro)",
            },
        ],
    };

    projects: Project[] = [
        {
            title: "Personal website",
            description:
                "The one you're on right now. It's also a big part of my portfolio as well as a symbol of my dedication.",
            image: "portfolio.webp",
            sourceLink: "https://github.com/scriptSQD/scriptsqd-personal",
            stack: {
                front: ["Angular (SSR)", "Tailwind CSS"],
            },
        },
        {
            title: "TuneStory",
            description:
                "Personal blog about music, written during 1-week vacations.",
            image: "tunestory.webp",
            sourceLink: "https://github.com/scriptSQD/tunestory",
            liveLink: "https://tunestory.vercel.app",
            stack: {
                front: ["Angular", "Tailwind CSS"],
                back: ["Strapi"],
            },
        },
        {
            title: "Tyzenguide",
            description:
                "School project dedicated to Antoni Tyzenhaus. Grodno's very famous figure.",
            image: "tyzenguide.webp",
            sourceLink: "https://github.com/scriptSQD/tyzenguide-remastered",
            liveLink: "https://tyzenguide.web.app",
            stack: {
                front: ["Angular", "Tailwind CSS", "HyperUI (UIKit)"],
            },
        },
    ];

    ngOnInit(): void {}
}

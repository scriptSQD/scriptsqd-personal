import { Component, OnInit } from "@angular/core";
import { Project } from "./project.interface";
import { Skills } from "./skills.interface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    constructor() {}

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
                tooltip: "Linux (esp. Arch)",
            },
        ],
    };

    projects: Project[] = [
        {
            title: "Personal website",
            description:
                "The one you're on right now. It's also a big part of my portfolio as well as a symbol of my dedication.",
            image: "portfolio.webp",
            stack: {
                front: ["Angular (SSR)", "Tailwind CSS"],
            },
        },
        {
            title: "TuneStory",
            description:
                "Personal blog about music, written during 1-week vacations.",
            image: "tunestory.webp",
            link: "https://tunestory.vercel.app",
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
            link: "https://tyzenguide.web.app",
            stack: {
                front: ["Angular", "Tailwind CSS", "HyperUI (UIKit)"],
            },
        },
    ];

    ngOnInit(): void {}
}

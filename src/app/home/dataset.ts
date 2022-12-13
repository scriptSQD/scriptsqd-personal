import { Skills } from "./skills.interface";
import { IProject } from "./project.interface";

export const skills: Skills = {
    front: [
        {
            icon: "/assets/icons/skills/angular.svg",
            tooltip: "Angular v13+",
        },
        {
            icon: "/assets/icons/skills/tailwindcss.svg",
            tooltip: "Tailwind CSS",
        },
    ],
    back: [
        {
            icon: "/assets/icons/skills/nestjs.svg",
            tooltip: "NestJS",
        },
        {
            icon: "/assets/icons/skills/strapi.svg",
            tooltip: "Strapi",
        },
    ],
    general: [
        {
            icon: "/assets/icons/skills/mongodb.svg",
            tooltip: "MongoDB",
        },
        {
            icon: "/assets/icons/skills/git.svg",
            tooltip: "Git / GitHub",
        },
        {
            icon: "/assets/icons/skills/linux.svg",
            tooltip: "Linux (kernel and Arch Distro)",
        },
        {
            icon: "/assets/icons/skills/docker.svg",
            tooltip: "Docker (Compose)",
        },
    ],
};

export const projects: IProject[] = [
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
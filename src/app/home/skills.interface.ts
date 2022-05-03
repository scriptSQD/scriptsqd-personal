interface Skill {
    icon: string;
    tooltip: string;
}

export interface Skills {
    front: Skill[];
    back: Skill[];
    general: Skill[];
}

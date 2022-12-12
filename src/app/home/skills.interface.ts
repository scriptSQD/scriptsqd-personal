interface ISkill {
    icon: string;
    tooltip: string;
}

export interface Skills {
    front: ISkill[];
    back: ISkill[];
    general: ISkill[];
}

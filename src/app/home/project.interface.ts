export interface Project {
    title: string;
    description: string;
    image: string;
    link?: string;
    stack: {
        front?: string[];
        back?: string[];
    };
}

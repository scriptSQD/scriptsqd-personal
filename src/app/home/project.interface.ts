export interface Project {
    title: string;
    description: string;
    image: string;
    sourceLink?: string;
    liveLink?: string;
    stack: {
        front?: string[];
        back?: string[];
    };
}

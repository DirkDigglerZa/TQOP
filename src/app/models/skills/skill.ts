import { Property } from "../properties";

export interface Skill {
    description: string;
    name: string;
    properties: Property[];
    tag: string;
}
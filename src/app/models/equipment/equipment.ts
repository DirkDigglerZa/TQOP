import { Property } from "../properties";

export interface Equipment {
    classification: string;
    itemLevel: number;
    levelRequirement: number;
    name: string;
    properties: Property[];
    tag: string;
}
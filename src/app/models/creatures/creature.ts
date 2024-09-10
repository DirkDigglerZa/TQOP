import { Abilities } from "./abilities";
import { Loot } from "./loot";
import { Property } from "../properties";

export interface Creature {
    abilities: Abilities[];
    classification: string;
    level: number[];
    loot: Loot[];
    name: string;
    properties: Property[];
    race: string;
    tag: string;
}
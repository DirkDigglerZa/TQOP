import { AffixesTypes } from "../enums/tqenums";
import { Property } from "../properties";

export class Affix {
    type: AffixesTypes;
    equipment: string;
    levelRequirement: number;
    name: string;
    properties: Property[];
}
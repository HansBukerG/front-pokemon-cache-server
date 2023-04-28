import { ImageOfDigimon } from "./Image.model";
import { Skill } from "./Skill.model";

export interface DigimonDatum {
    _id: string;
    id: number | null;
    name: null | string;
    skills: Skill[] | null;
    images: ImageOfDigimon[] | null;
}

import { DigimonDatum } from "../models/Digimon.model";

export interface DigimonDTO {
    message: string;
    digimonData: DigimonDatum[];
}

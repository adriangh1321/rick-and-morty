import { Character } from "./character";
import { Info } from "./info";

export interface CharacterResponse {
   
    info:   Info;
    results: Character[];
 
}

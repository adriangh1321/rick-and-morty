import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterResponse } from 'src/app/models/character-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterUrl = environment.apiUrl + "/character/"


  constructor(private http:HttpClient) { }

  getCharacters(params?:any):Observable<CharacterResponse>{
    let options = this.getOptions(params);
    return this.http.get<CharacterResponse>(this.characterUrl,{params:options});
  }

  getCharacterById(id:string):Observable<Character>{
    return this.http.get<Character>(`${this.characterUrl}/${id}`);
  }


  getOptions(params?:any){
    let options = new HttpParams()
    for(let key in params){
      options = options.append(key, params[key])
    }
    return options
  }
}

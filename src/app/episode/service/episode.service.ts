import { Injectable } from '@angular/core';
import { Episode, IEpisode } from 'src/app/models/episode';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  episodeUrl = environment.apiUrl + "/episode"

  constructor(private http:HttpClient) { }

  getEpisodes(episodeNumbers: number[]):Observable<Episode[] | Episode>{

    return this.http.get<Episode[] | Episode>(`${this.episodeUrl}/${episodeNumbers}`);
  }
}

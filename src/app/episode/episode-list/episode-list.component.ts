import { Component, Input, OnInit } from '@angular/core';
import { Episode, IEpisode } from 'src/app/models/episode';
import { EpisodeService } from '../service/episode.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: IEpisode[] =[]
  idCharacter!: number
  episodesNumbers!: number[]

  constructor(private episodeService: EpisodeService, private route: ActivatedRoute, private router: Router) {
    let current = this.router.getCurrentNavigation();
    let state = this.router.getCurrentNavigation()?.extras!.state!
    this.episodesNumbers = this.router.getCurrentNavigation()?.extras!.state!['episodeNumbers']
    this.route.params.subscribe(params => (this.idCharacter = params['id']));
  }

  ngOnInit(): void {

    this.episodeService.getEpisodes(this.episodesNumbers).subscribe(ep => {

      if(Array.isArray(ep)){
        this.episodes = ep;
      }else{
        this.episodes.push(ep)
      }
    })
        
  }

}

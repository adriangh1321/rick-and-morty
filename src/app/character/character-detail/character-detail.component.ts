import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit{
  id: string | null;
  character!:Character;

  constructor(private characterService:CharacterService, private route: ActivatedRoute,private router: Router){
    this.id = route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
   this.characterService.getCharacterById(this.id!).subscribe(response=> this.character = response)
  }

  viewEpisodes(id:any){
    const episodeNumbers = this.getEpisodesNumber();
    this.router.navigate([`characters/${id}/episodes`], { state: {episodeNumbers}});
  }

  getEpisodesNumber(){
    const episodeNumbers= this.character.episode.map(episodeUrl=>Number.parseInt(episodeUrl.replace("https://rickandmortyapi.com/api/episode/","")))
    return episodeNumbers
  }

}

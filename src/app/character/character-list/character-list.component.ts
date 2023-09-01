import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from '../service/character.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  name: String = '';

  formFilter!: FormGroup

  displayedColumns: string[] = ['id', 'name', 'image', 'accions'];
  characters: Character[] = [];

  constructor(private characterService: CharacterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formFilter = this.fb.group({
      name: ['', []],
    })
    this.characterService.getCharacters().subscribe(response => this.characters = response.results)
  }

  filter() {
    this.characterService.getCharacters({
      name: this.formFilter.controls['name'].value
    }).subscribe(
      response => this.characters = response.results,
      error => {
        if (error.status === 404) {
          this.characters = []
        }
      }
    )
  }

}

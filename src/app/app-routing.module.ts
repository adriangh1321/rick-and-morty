import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { EpisodeListComponent } from './episode/episode-list/episode-list.component';

const routes: Routes = [{
  path:'',
  redirectTo: '/characters',
  pathMatch:'full' 
},{
  path:'characters',
  component: CharacterListComponent
},
{
  path:'characters/:id',
  component:CharacterDetailComponent
},
{
  path:'characters/:id/episodes',
  component:EpisodeListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

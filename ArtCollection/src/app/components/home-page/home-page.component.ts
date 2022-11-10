import { addArtwork, removeArtwork } from './../../state/arts.actions';
import { map, tap } from 'rxjs';
import { Art } from './../../models/arts.model';
import { ArtService } from './../../services/art.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectArtCollection, selectArts } from 'src/app/state/arts.selectors';
import { retreivedArtList } from 'src/app/state/arts.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private store:Store, private artService: ArtService) { }

  arts$ = this.store.select(selectArts);

  artCollection$ = this.store.select(selectArtCollection).pipe(
    map((arts: Array<Art | undefined>)=>{
      return arts.filter( (art)=> art )  as Array<Art>;
    }),
    tap((arts: Array<Art>)=> {
      console.log('non undefined arts', arts);
    })
  )

  ngOnInit(): void { //dispatch - to call the actions
    this.artService.getArtworks().subscribe((arts)=> this.store.dispatch(retreivedArtList({arts})) )
  }

  onAdd(artId:number){
    this.store.dispatch(addArtwork({artId}));
  }

  onRemove(artId:number){
    this.store.dispatch(removeArtwork({artId}));
  }


}

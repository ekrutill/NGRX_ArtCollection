import { map, tap } from 'rxjs';
import { selectArts, selectArtCollection } from './state/arts.selectors';
import { Store } from '@ngrx/store';
import { ArtService } from './services/art.service';
import { Component, OnInit } from '@angular/core';
import { retreivedArtList } from './state/arts.actions';
import { Art } from './models/arts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ArtCollection';

  constructor(private artService: ArtService, private store: Store){}

  arts$ = this.store.select(selectArts);

  artCollection$ = this.store.select(selectArtCollection).pipe(
    map((arts: Array<Art | undefined>)=>{
      return arts.filter( (art)=> art )  as Array<Art>;
    }),
    tap((arts: Array<Art>)=> {
      console.log('defined arts', arts);
    })
  )

  ngOnInit(): void {
    this.artService.getArtworks().subscribe((arts)=> this.store.dispatch(retreivedArtList({arts})) )
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ArtListComponent } from './components/art-list/art-list.component';
import { ArtCollectionComponent } from './components/art-collection/art-collection.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { collectionReducer } from './state/collection.reducer';
import { artsReducer } from './state/arts.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    ArtCollectionComponent,
    HomePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({arts:artsReducer, collection: collectionReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

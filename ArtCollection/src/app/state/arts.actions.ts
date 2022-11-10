import { createAction, props } from '@ngrx/store';
import { Art } from '../models/arts.model'; 

export const addArtwork = createAction(
    '[Art List] Add Artwork',   // from where and what kind of event
    
props<{ artId: number }>()   // props - call the action
);
  
export const removeArtwork = createAction(
    '[Art Collection] Remove Artwork',
props<{ artId: number}>()
);

export const retreivedArtList = createAction(
    // '[Art List/API/art] Retrieve Art list Success',
    '[Art List] Retrieve Art list Success',
props<{ arts: ReadonlyArray<Art>}>() //readonly - from client site the array is read only.
);
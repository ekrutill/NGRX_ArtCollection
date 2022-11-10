import { retreivedArtList } from './arts.actions'; 
import { Art } from '../models/arts.model'; 
import { createReducer, on } from '@ngrx/store';


export const initialState: ReadonlyArray<Art> = [];

export const artsReducer = createReducer(
    initialState, // from API, empty by default
    on(retreivedArtList,  (state, { arts }) => arts)
);
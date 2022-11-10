import { Art } from '../models/arts.model';
import { addArtwork, removeArtwork } from './arts.actions';
import { on, createReducer } from '@ngrx/store';


export const initialState: ReadonlyArray<any> = []// a collectionnek a store-ja

export const collectionReducer = createReducer (
    initialState,
    on(removeArtwork, (state, {artId}) => state.filter((id)=> id !== artId)),

    on(addArtwork, (state, {artId}) => {
        if (state.indexOf(artId) > -1) return state;
        return [...state, artId];
    })
)

//can not push to readonly array. readobly- they are not modified becauzse we can handle different states.

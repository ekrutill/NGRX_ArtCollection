import { Art } from "../models/arts.model"; 
import { createFeatureSelector, createSelector } from "@ngrx/store";

// one feature from the 'matrix'
export const selectArts = createFeatureSelector<Art[]>('arts');

export const selectCollectionState = 
createFeatureSelector<ReadonlyArray<any>>('collection'); //it can contain id-s too.

export const selectArtCollection = createSelector (
    selectArts,
    selectCollectionState,
    (arts, collection) => {
        return collection.map((id) => arts.find((art) => art.id === id));
    }
)
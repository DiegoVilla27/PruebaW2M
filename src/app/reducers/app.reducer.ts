import { ActionReducerMap } from "@ngrx/store"

// MODELS
import { Heroe } from "../models/heroe.model"

// REDUCERS
import { heroeReducer } from "./heroe/heroe.reducer"
import { heroeSelectedReducer } from "./heroeSelected/heroeSelected.reducer"

export interface AppState {
    heroes: Heroe[],
    heroeSelected: Heroe
}

export const appReducers: ActionReducerMap<AppState> = {
    heroes: heroeReducer,
    heroeSelected: heroeSelectedReducer
}
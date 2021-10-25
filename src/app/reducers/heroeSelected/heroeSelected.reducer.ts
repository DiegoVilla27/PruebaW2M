import { createReducer, on } from '@ngrx/store'

// MODELS
import { Heroe } from "src/app/models/heroe.model"

// ACTIONS-TODO
import { selectedHeroeAction } from './heroeSelected.actions'

const initialState: Heroe = {id: '', name: '', power: ''}

const _heroeSelectedReducer = createReducer(initialState,
    on(selectedHeroeAction, (state: any, props: any) => {
        return props.heroe
    }),
)

export function heroeSelectedReducer(state: any, action: any) {
    return _heroeSelectedReducer(state, action)
}
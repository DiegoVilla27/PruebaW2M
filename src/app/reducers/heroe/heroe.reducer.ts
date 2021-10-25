import { createReducer, on } from '@ngrx/store'

// MODELS
import { Heroe } from "src/app/models/heroe.model"

// ACTIONS-HEROES
import { createHeroeAction, editHeroeAction, deleteHeroeAction } from './heroe.actions'

const initialState: Heroe[] = [
    // {id: '1', name: 'Spiderman', power: 'Strong'},
    // {id: '2', name: 'Thor', power: 'Electric'},
    // {id: '3', name: 'Batman', power: 'Rich'}
]

const _heroeReducer = createReducer(initialState,
    on(createHeroeAction, (state, props) => {
        return [
            ...state,
            new Heroe(props.name, props.power)
        ]
    }),
    on(editHeroeAction, (state, props) => {
        return state.map(heroe => {
            if (heroe.id === props.id) {
                return {
                    ...heroe,
                    name: props.name,
                    power: props.power
                }
            } else {
                return heroe
            }
        })
    }),
    on(deleteHeroeAction, (state, props) => {
        return state.filter(heroe => heroe.id !== props.id)
    })
)

export function heroeReducer(state: any, action: any) {
    return _heroeReducer(state, action)
}
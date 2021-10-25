import { createAction, props } from '@ngrx/store'

// TYPES-HEROE
import { createHeroe, editHeroe, deleteHeroe } from './heroe.types'

// Action to create heroe
export const createHeroeAction = createAction(
    createHeroe,
    props<{ name: string, power: string }>()
)

// Action to edit heroe
export const editHeroeAction = createAction(
    editHeroe,
    props<{ id: string, name: string, power: string }>()
)

// Action to delete heroe
export const deleteHeroeAction = createAction(
    deleteHeroe,
    props<{ id: string }>()
)
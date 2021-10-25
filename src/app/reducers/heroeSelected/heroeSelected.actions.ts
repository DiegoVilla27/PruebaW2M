import { createAction, props } from '@ngrx/store'

// TYPES-HEROESELECTED
import { selectedHeroe } from './heroeSelected.types'

// MODELS
import { Heroe } from '../../models/heroe.model'

// Action to selected heroe
export const selectedHeroeAction = createAction(
    selectedHeroe,
    props<{ heroe: Heroe }>()
)
import {ADD, REMOVE, CLEARCART} from "../types/index"
import {createAction} from 'redux-actions'

export const add = createAction(ADD)

export const remove = createAction(REMOVE)

export const clearCart = createAction(CLEARCART)
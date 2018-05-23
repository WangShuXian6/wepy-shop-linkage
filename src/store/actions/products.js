import {REQUEST_PRODUCTS} from '../types/index'
import {createAction} from 'redux-actions'

export const asyncRequestProducts = createAction(REQUEST_PRODUCTS)

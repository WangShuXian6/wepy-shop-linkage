import {combineReducers} from 'redux'
import cartControl from './cartControl'
import products from './products'
import scroll from './scroll'
import asyncnum from './async'

export default combineReducers({
  cartControl,
  products,
  scroll,
  asyncnum
})
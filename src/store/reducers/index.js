import {combineReducers} from 'redux'
import cartControl from './cartControl'
import products from './products'
import scroll from './scroll'

export default combineReducers({
  cartControl,
  products,
  scroll
})
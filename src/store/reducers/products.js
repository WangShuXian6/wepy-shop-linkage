import {handleActions} from 'redux-actions'
import {REQUEST_PRODUCTS} from "../types/index"

export default handleActions({
  [REQUEST_PRODUCTS](state, action) {
    //console.log(action)
    return action.payload
  }
}, {})
import {handleActions} from 'redux-actions'
import {ASYNC_INCREMENT} from '../types/index'

export default handleActions({
  [ASYNC_INCREMENT](state, action) {
    console.log('action.payload', action.payload)
    return action.payload
  }
}, {
  num: 0
})
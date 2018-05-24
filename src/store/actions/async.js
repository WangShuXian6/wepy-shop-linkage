import {ASYNC_INCREMENT} from '../types/index'
import {createAction} from 'redux-actions'

export const asyncIncrement = createAction(ASYNC_INCREMENT, (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(payload)
    }, 2000)
  })
})
import {UPDATE_SCROLL, UPDATE_SCROLL_ACTIVENAV} from '../types/index'
import {createAction} from 'redux-actions'

export const updateScroll = createAction(UPDATE_SCROLL)


export const updateActiveNav = createAction(UPDATE_SCROLL_ACTIVENAV, (payload) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload)
    }, 1500)
  })
})
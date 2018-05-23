import {handleActions} from 'redux-actions'
import {ADD, REMOVE, CLEARCART} from '../types/index'

const removeProduct = (state, payload) => {
  let itemIndex, category, is_set_meal, id, price
  [itemIndex, category, is_set_meal, id, price] = payload
  let newState = Object.assign({}, state)

  if (newState[category] && newState[category][itemIndex] && newState[category][itemIndex].num > 0) {
    if (newState[category][itemIndex].num = 1) {
      newState[category][itemIndex].canRemove = false
    }
    newState[category][itemIndex].num--
  }
  return newState
}

const addProduct = (state, payload) => {
  let itemIndex, category, is_set_meal, id, price
  [itemIndex, category, is_set_meal, id, price] = payload
  let newState = Object.assign({}, state)
  if (!newState[category]) {
    newState[category] = []
  }
  if (newState[category][itemIndex]) {
    newState[category][itemIndex].num++
    newState[category][itemIndex].canRemove = true
  } else {
    newState[category][itemIndex] = {
      num: 1,
      price: price,
      canRemove: true,
      id: id
    }
  }
  console.log('加入购物车侯后总状态', newState)
  return newState
}

export default handleActions({
  [ADD](state, action) {
    //console.log(state)
    return addProduct(state, action.payload)
  },
  [REMOVE](state, action) {
    return removeProduct(state, action.payload)
  },
  [CLEARCART](state, action) {
    return {}
  }
}, {})

// 默认状态格式
const testOrder = {
  "套餐": [
    {
      "id": 10331,
      "name": "爱抢购双人团购",
      "num": 1
    },
    {
      "id": 10332,
      "name": "爱抢购双人团购2",
      "num": 1
    }
  ],
  "主食": [
    {
      "id": 50140,
      "name": "炒章鱼",
      "num": 1
    },
    {
      "id": 50141,
      "name": "炒章鱼2",
      "num": 1
    }
  ],
  "单品": [
    {
      "id": 50140,
      "name": "炒章鱼",
      "num": 1
    },
    {
      "id": 50141,
      "name": "炒章鱼2",
      "num": 1
    }
  ]
}
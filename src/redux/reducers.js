import { CHANGENAME, CHANGESEX } from "./actionType";
// 你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
import { combineReducers } from "redux";

function changeName(state = "tom", action) {
  switch (action.type) {
    case CHANGENAME:
      return action.data
    default:
      return state
  }
}
function changeSex(state = '男', action) {
  switch (action.type) {
    case CHANGESEX:
      return action.data
    default:
      return state
  }
}
function setCollapsed(state = false, action) {
  switch (action.type) {
    case CHANGESEX:
      return action.data
    default:
      return state
  }
}

export const finalReducer = combineReducers({
  changeName,
  changeSex,
  setCollapsed
})
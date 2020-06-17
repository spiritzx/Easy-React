/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-17 20:06:21
 */ 
import { CHANGENAME, CHANGESEX } from "./types"

export function changeName(state = "tom", action) {
  switch (action.type) {
    case CHANGENAME:
      return action.data
    default:
      return state
  }
}
export function changeSex(state = '男', action) {
  switch (action.type) {
    case CHANGESEX:
      return action.data
    default:
      return state
  }
}
/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-17 20:33:36
 */ 
import { CHANGEPAGESIDE } from "./types"

export function changeSide(state = false, action) {
  switch (action.type) {
    case CHANGEPAGESIDE:
      return action.isCollapsed
    default:
      return state
  }
}
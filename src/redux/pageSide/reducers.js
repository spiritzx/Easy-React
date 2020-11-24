/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-23 21:53:44
 */ 
import { CHANGEPAGESIDE, AddRouteArr } from "./types"

export function changeSide(state = false, action) {
  switch (action.type) {
    case CHANGEPAGESIDE:
      return action.isCollapsed;
    default:
      return state
  }
}

export function routeBarFn(routeArr = [], action) {
  switch (action.type) {
    case AddRouteArr:
      return [...routeArr, action];
    default:
      return routeArr
  }
}
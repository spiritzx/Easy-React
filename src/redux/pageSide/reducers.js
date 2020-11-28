/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-28 16:13:58
 */ 
import { CHANGEPAGESIDE, AddRouteArr, DelRouteArr } from "./types"

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
      return [...routeArr, action.route];
    case DelRouteArr:
      routeArr.splice(action.index, 1);
      return [...routeArr]
    default:
      return routeArr
  }
}
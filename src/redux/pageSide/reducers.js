/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-16 22:31:30
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

export function addRouteFn(routeArr = [], action) {
  switch (action.type) {
      case AddRouteArr:
        return routeArr.push(action.route);
      default:
        return routeArr
  }
}
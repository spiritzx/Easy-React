/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:34
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-16 22:30:52
 */ 
import { CHANGEPAGESIDE, AddRouteArr } from "./types"

export const changeSide = (isCollapsed) => (
  {
    type: CHANGEPAGESIDE,
    isCollapsed: isCollapsed
  }
)

export const addRouteFn =  route => {
  let state = {
    type: AddRouteArr,
    route: route
  }
  return state;
}
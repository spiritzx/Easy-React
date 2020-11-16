/*
 * @Descripttion: home
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-27 10:46:56
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-16 22:14:54
 */
import { combineReducers } from "redux";
import { changeName, changeSex } from "./home/reducers"
import { changeSide, addRouteFn } from "./pageSide/reducers"

// 你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
export const index = combineReducers({
  changeName,
  changeSex,
  changeSide,
  addRouteFn
})

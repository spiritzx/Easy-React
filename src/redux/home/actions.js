/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:34
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-17 20:19:32
 */ 
import { CHANGENAME, CHANGESEX } from "./types"

export const changeName = (name) => (
  {
    type: CHANGENAME,
    data: name
  }
)
export const changeSex = (sex) => (
  {
    type: CHANGESEX,
    data: sex
  }
)
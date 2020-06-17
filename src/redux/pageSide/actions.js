/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-17 20:01:34
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-17 20:33:46
 */ 
import { CHANGEPAGESIDE } from "./types"

export const changeSide = (isCollapsed) => (
  {
    type: CHANGEPAGESIDE,
    isCollapsed: isCollapsed
  }
)
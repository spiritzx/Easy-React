/*
 * @Descripttion: 页面组件预定
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-03 15:02:48
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-04 22:53:26
 */
// 首页 
function Home() {
  return import("../views/home/home")
}
function About() {
  return import("../views/home/home")
}
function Detail() {
  return import("../views/Detail/Detail")
}
function DetailChild1() {
  return import("../views/Detail/DetailChild1/DetailChild1")
}
function DetailChild2() {
  return import("../views/Detail/DetailChild2/DetailChild2")
}
function NotFound() {
  return import("../views/Detail/DetailChild2/DetailChild2")
}
function Login() {
  return import("../views/login/login")
}

export {
  Home,
  About,
  Detail,
  DetailChild1,
  DetailChild2,
  NotFound,
  Login
}

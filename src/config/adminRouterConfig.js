/*
 * @Descripttion: 管理内置路由
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-03 11:32:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-25 22:06:08
 */ 
let routerArray = [
  {
    type: "redirect",
    from: "/",
    path: "/admin/home",
    exact: true
  },
  {
    name: "Home",
    type: "link",
    path: "/admin/home",
    exact: true,
    c_name: "首页",
    meta: {
      hideNavBar: true
    }
  },
  {
    name: "About",
    type: "link",
    path: "/admin/about",
    exact: true,
    c_name: "关于",
  },
  {
    name: "Detail",
    type: "link",
    path: "/admin/detail",
    exact: true,// 开启严格匹配模式
  },
  // {
  //   name: "NotFound",
  //   path: "/admin/404",
  //   exact: false,
  // },
  // {
  //   type: "redirect",
  //   path: "/404",
  // }
]

export default routerArray
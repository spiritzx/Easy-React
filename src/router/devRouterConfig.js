/*
 * @Descripttion: 本地内置路由
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-03 11:32:20
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-03 15:11:19
 */ 
let routerArray = [
  {
    type: "redirect",
    from: "/",
    path: "/home",
    exact: true,
  },
  {
    name: "Home",
    path: "/home",
    exact: true
  },
  {
    name: "About",
    path: "/about",
    exact: true // 开启严格匹配模式
  },
  {
    name: "Detail",
    path: "/detail",
    exact: false, // 开启严格匹配模式
    childer: [
      {
        name: "DetailChild1",
        path: "/detail/detailChild1",
        exact: true // 开启严格匹配模式
      },
      {
        name: "DetailChild2",
        path: "/detail/detailChild2/:id",
        exact: true // 开启严格匹配模式
      },
    ]
  },
  {
    name: "NotFound",
    path: "/404",
    exact: false
  },
  {
    type: "redirect",
    path: "/404"
  }
]

export default routerArray
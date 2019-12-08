/* 
  * 路由管理 
  */
import React from 'react';
import Loadable from 'react-loadable';
// 路由加载
function loadable(comp) {
  return Loadable({
    loader: comp,
    loading() {
      return (
        <div>...</div>
      )
    },
    delay: 5000,
    timeout: 10000
  })
}

let routerArr = [
  {
    type: "redirect",
    from: "/",
    path: "/home",
    exact: true
  },
  {
    name: "home",
    path: "/home",
    component: loadable(() => import("./views/home/home")),
    exact: true // 开启严格匹配模式
  },
  {
    name: "about",
    path: "/about",
    component: loadable(() => import("./views/about/about")),
    exact: true // 开启严格匹配模式
  },
  {
    name: "detail",
    path: "/detail",
    component: loadable(() => import("./views/Detail/Detail")),
    exact: false, // 开启严格匹配模式
    childer: [
      {
        name: "DetailChild1",
        path: "/detail/detailChild1",
        component: loadable(() => import("./views/Detail/DetailChild1/DetailChild1")),
        exact: true, // 开启严格匹配模式
      },
    ]
  },
  
  {
    name: "NotFound",
    path: "/404",
    component: loadable(() => import("./views/NotFound/NotFound")),
    exact: false,
  },
  {
    type: "redirect",
    path: "/404"
  },
]

export default routerArr

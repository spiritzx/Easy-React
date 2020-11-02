/* 
  * 路由管理 
  */
import React from 'react';
import Loadable from 'react-loadable'
// 组件路由记载配置
import * as path from "./compPath"
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
// 递归获取路由配置数组
function routerFn(arr) {
  let Router = []
  let routerHandleFn = (arr, Router)=>  {
    arr.forEach(val => {
      let obj = {
        type: val.type,
        from: val.from,
        path: val.path,
        exact: val.exact,
        name: val.name
      }
      if (val.childer && val.childer.length) {
        obj.childer = []
        routerHandleFn(val.childer, obj.childer)
      } 
      if (val.name) {
        try {
          obj.component = ((comp) => {
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
          })(path[val.name]);
        } catch (error) {
          obj.component = "404"
        }
        
      }
      Router.push(obj)
    })
  }
  routerHandleFn(arr, Router)
  return Router
}
// let routerArr = [
//   {
//     type: "redirect",
//     from: "/",
//     path: "/home",
//     exact: true
//   },
//   {
//     name: "home",
//     path: "/home",
//     component: loadable(() => import("./views/home/home")),
//     exact: true // 开启严格匹配模式
//   },
//   {
//     name: "about",
//     path: "/about",
//     component: loadable(() => import("./views/about/about")),
//     exact: true // 开启严格匹配模式
//   },
//   {
//     name: "detail",
//     path: "/detail",
//     component: loadable(() => import("./views/Detail/Detail")),
//     exact: false, // 开启严格匹配模式
//     childer: [
//       {
//         name: "DetailChild1",
//         path: "/detail/detailChild1",
//         component: loadable(() => import("./views/Detail/DetailChild1/DetailChild1")),
//         exact: true, // 开启严格匹配模式
//       },
//       {
//         name: "DetailChild2",
//         path: "/detail/detailChild2/:id",
//         component: loadable(() => import("./views/Detail/DetailChild2/DetailChild2")),
//         exact: true, // 开启严格匹配模式
//       },
//     ]
//   },
//   {
//     name: "NotFound",
//     path: "/404",
//     component: loadable(() => import("./views/NotFound/NotFound")),
//     exact: false,
//   },
//   {
//     type: "redirect",
//     path: "/404"
//   },
// ]

export default routerFn

/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-04 23:05:25
 */
/* 
  * 路由管理 
  */
import { loadComp } from "../utils/loadComp";

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
          obj.component = loadComp(val.name)();
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

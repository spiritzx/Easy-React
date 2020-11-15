/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-02 14:17:48
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-15 14:10:09
 */
// 使用 Mock
import Mock from 'mockjs'


let test = Mock.mock('/mock/test', 'get', {
  success: true,
  data: {
    password: "123456",
    //属性 paragraph 是一个随机长度的段落
    message: '@cparagraph',
    //属性 time 是一个 size, background, text 的随机时间
    'time': '@time("HH:mm:ss")',
    // 属性 list 的值是一个数组，其中随机含有 1 到 5 个元素
    'list|1-5': [
      {
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
        'name|3-10': '',
        // 属性 sex 是一个bool值
        "sex|1-2": true,
        //属性 image 是一个随机图片 参数分别为size, background, text
        'image': "@image('200x100', '#FFC0CB', '1234')",
      }
    ]
  }
})

let userRoute = Mock.mock('/mock/route', 'get', {
  success: true,
  data: [
    {
      c_name: "系统管理",
      icon: "cesktopOutlined",
      childer: [
        {
          c_name: "用户管理",
          name: "userAdmin",
          type: "link",
          path: "/admin/userAdmin",
          exact: true,
        },
        {
          c_name: "权限管理",
          name: "authAdmin",
          type: "link",
          path: "/admin/authAdmin",
          exact: true,
        },
        {
          c_name: "路由管理",
          name: "routeAdmin",
          type: "link",
          path: "/admin/routeAdmin",
          exact: true,
        },
      ]
    }
  ]
})
export default {
  test,
  userRoute
} 
/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-04 21:32:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-04 23:02:51
 */
import React from 'react';
import Loadable from 'react-loadable';
import * as page from "../router/pagePath";
import { Loading } from "../components/loading/loading";

export function loadComp(name) {
  let comp = page[name];
  return function loadable() {
    return Loadable({
      loader: comp,
      loading() {
        return (
          <Loading></Loading>
        )
      },
      delay: 5000,
      timeout: 10000
    })
  }
}
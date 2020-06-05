/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-27 10:46:56
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-05 16:52:00
 */ 
import {createStore,applyMiddleware} from 'redux'
import {finalReducer } from './reducers'
import thunk from 'redux-thunk'
//生成store对象
const store = createStore(finalReducer, applyMiddleware(thunk));
//内部会第一次调用reducer函数，得到初始state 

export default store
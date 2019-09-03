/*
 * @Author: zhouhong07
 * @Date: 2019-09-03 11:13:11
 * @LastEditors: 
 * @LastEditTime: 2019-09-03 16:10:49
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

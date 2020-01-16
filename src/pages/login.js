import React, { Component } from "react";
// import { Button } from "antd";
import styles from "./login.css";
import router from "umi/router";
import { Login } from "ant-design-pro";
import {connect} from 'dva'

const { UserName, Password, Submit } = Login; // 通用的用户名、密码和提交组件

// 改为类形式组件，可持有状态
@connect()
export default class extends Component {
	// let from = props.location.state.from || "/"; // 重定向地址 
	onSubmit = (err, values) => {
		console.log(err, values);
		if(!err){
			// 登陆成功
			this.props.dispatch({
				type: 'user/login',
				payload: values
			})
		}
	};
  	render() {
		return (
			<div className={styles.loginForm}>
				{/* logo */}
				<img className={styles.logo} src="https://file.40017.cn/img140017cnproduct/cn/s/2020/zt/touch/1068947/logo.png"/> 
				{/* 登录表单 */}
				<Login onSubmit={this.onSubmit}>
					<UserName 
						name="username" 
						placeholder="panjie" 
						rules={[{ required: true, message: "请输入用户名" }]}
					/> 
					<Password 
						name="password" 
						placeholder="123" 
						rules={[{ required: true, 
						message: "请输入密码" }]}
					/>
					<Submit>登录</Submit> 
				</Login>
			</div> 
		);
	} 	
}
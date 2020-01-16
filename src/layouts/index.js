import { Layout, Menu } from "antd";
import styles from "./index.css";
import Link from 'umi/link'

const { Header, Footer, Content } = Layout;

export default function(props) {
	const {pathname} = props.location
	const menus = [
		{path: '/', name: '商品'},
		{path: '/users', name: '用户'},
		{path: '/about', name: '关于'},
	]
	const selectedKeys = menus.filter(menu => {
		if(menu.path === '/'){
			return pathname === '/'
		}
		return pathname.startsWith(menu.path)
	}).map(menu => menu.path)
	
	// const selectedKeys = [props.location.pathname]
  	return (
		<Layout>
			{/* 页头 */}
			<Header className={styles.header}>
				{/* 新增内容 */}
				<img className={styles.logo} src="https://file.40017.cn/img140017cnproduct/cn/s/2020/zt/touch/1068947/logo.png"/> 
				<Menu
					theme="dark"
					mode="horizontal"
					// defaultSelectedKeys={["2"]}
					selectedKeys={selectedKeys}
					style={{ lineHeight: "64px", float: "left" }}
				>
					<Menu.Item key="/">
						<Link to="/">商品</Link> 
					</Menu.Item>
					<Menu.Item key="/users">
						<Link to="/users">用户</Link> 
					</Menu.Item>
					<Menu.Item key="/about">
						<Link to="/about">关于</Link>
					</Menu.Item>
        		</Menu>
			</Header> 
			{/* 内容 */}
			<Content className={styles.content}>
				<div className={styles.box}>{props.children}</div> 
			</Content>
			{/* 页脚 */}
			<Footer className={styles.footer}>底部</Footer>
		</Layout> 
    );
}
import router from 'umi/router'
import axios from 'axios'

// 初始状态:本地缓存或空值对象
const userinfo = JSON.parse(localStorage.getItem('userinfo')) || {
    token: "",
    role: "",
    username: "",
    balance: 0
}

// 登陆请求方法
function login(payload) {
    return axios.post('/api/login', payload)
}

export default {
    namespace: 'user',
    state: userinfo,
    effects: {
        * login({ payload }, { call, put }) {
            const {
                data: {
                    code,
                    data: userinfo
                }
            } = yield call(login, payload)
            if (code == 0) {
                // 登录成功: 缓存用户信息
                localStorage.setItem('userinfo', userinfo)
                yield put({
                    type: 'init',
                    payload: userinfo
                })
                router.push('/')
            } else {
                // 登录失败:弹出提示信息，可以通过响应拦截器实现
            }
        }
    },

    reducers: {
        init(state, action) {
            // 覆盖旧状态
            return action.payload
        }
    }
}
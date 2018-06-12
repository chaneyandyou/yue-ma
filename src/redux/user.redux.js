import fetch from '../fetch'
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../utils'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  realName: '',
  pwd: '',
  type: ''
}

// action
function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

function registerSuccess(data) {
  return { data, type: REGISTER_SUCCESS }
}

function lognSuccess(data) {
  return { data, type: LOGIN_SUCCESS }
}

// reducer
export function user(state = initState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      Toast.success('注册成功', 1);
      return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
    case LOGIN_SUCCESS:
    return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

export function register({ user, realName, password, repeatpwd, type }) {
  if(!user || !realName || !password || !type) {
    return errorMsg('请输入必要信息')
  }
  if(password !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  return dispatch => {
    fetch({
      url: '/rest/user/register',
      method: 'post',
      data: {
        user,
        realName,
        password,
        type
      }
    })
    .then(res => {
      if(res.code === 'success') {
        dispatch(registerSuccess({ user, realName, password, type }))
      } else {
        dispatch(errorMsg(res.message))
      }
    })
  }
}

export function login({ user, password }) {
  if(!user || !password) {
    return errorMsg('请输入必要信息')
  }
  return dispatch => {
    fetch({
      url: '/rest/user/login',
      method: 'post',
      data: {
        user,
        password,
      }
    })
    .then(res => {
      if(res.code === 'success') {
        dispatch(lognSuccess({ user, password }))
      } else {
        dispatch(errorMsg(res.message))
      }
    })
  }
}

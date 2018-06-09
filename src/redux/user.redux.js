import fetch from '../fetch'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
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

// reducer
export function user(state = initState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', isAuth: true, ...action.data }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

export function register({ user, realName, pwd, repeatpwd, type }) {
  if(!user || !realName || !pwd || !type) {
    return errorMsg('请输入必要信息')
  }
  if(pwd !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  return dispatch => {
    fetch({
      url: '/rest/user/register',
      method: 'post',
      data: {
        user,
        realName,
        pwd,
        type
      }
    })
    .then(res => {
      if(res.code === 'success') {
        dispatch(registerSuccess({ user, realName, pwd, type }))
      } else {
        dispatch(errorMsg(res.message))
      }
    })
  }
}

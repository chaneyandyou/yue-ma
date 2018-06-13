import AsyncImport from './components/async_load'

export default [
  {
    name: '登录页',
    path: '/login',
    component: AsyncImport(() => import('./container/login'))
  },
  {
    name: '注册页',
    path: '/register',
    component: AsyncImport(() => import('./container/register'))
  },
  {
    name: '车主完善信息',
    path: '/carinfo',
    component: AsyncImport(() => import('./container/car_info'))
  },
  {
    name: '顺客完善信息',
    path: '/guestinfo',
    component: AsyncImport(() => import('./container/guest_info'))
  }
]

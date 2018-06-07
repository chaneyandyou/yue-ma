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
  }
]

import Home from './views/home';
import Detail from './views/detail';

export default [
  {
    path: '/',
    name: '首页',
    component: Home,
    exact: true
  },
  {
    path: '/detail',
    name: '详情',
    component: Detail,
    exact: true
  }
];

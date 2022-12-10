import { lazy } from 'react';
// const Login = Loadable(lazy(() => import('../pages/loginDriver')));
const ChartPage = lazy(() => import('../pages/chart'));
const MainPage = lazy(() => import('../pages/main'));
const GridPage = lazy(() => import('../pages/datagrid'));

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/chart',
        component: ChartPage
    },
    {
        path: '/grid',
        component: GridPage
    }
];

export default routes;

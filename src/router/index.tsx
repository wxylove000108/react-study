import React, {lazy} from 'react'
import {Navigate} from "react-router-dom";
// 路由懒加载
const lazyLoad = (path: string): JSX.Element => {
    const Comp = lazy(() => import(`../pages/${path}`))
    return (
        <React.Suspense fallback={<>加载中...</>}>
            <Comp/>
        </React.Suspense>
    )
}
const routes = [
    {
        path: '/home',
        name: '开始',
        element: lazyLoad('Home/home')
    },
    {
        path: '/about',
        name: '高级',
        element: lazyLoad('About/about')
    },
    {
        path: '/',
        element: <Navigate to="/home"/>
    }
]

export default routes

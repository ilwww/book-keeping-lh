import React from 'react';
import {ConfigProvider} from 'antd';
import {css, Global} from '@emotion/react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Mine from '@/pages/Mine';
import Find from '@/pages/Find';
import Chart from '@/pages/Chart';
import Detail from '@/pages/Detail';
import {COLOR_PRIMARY} from '@/constant';
import Layout from '../Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="mine" element={<Mine />} />
            <Route path="find" element={<Find />} />
            <Route path="chart" element={<Chart />} />
            <Route path="detail" element={<Detail />} />
        </Route>
    )
);

const globalStyle = css`
    body {
        margin: 0;
        overflow: hidden;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        height: 100vh;
    }
`;

export default function App() {
    return (
        <React.StrictMode>
            <Global styles={globalStyle} />
            <ConfigProvider theme={{token: {colorPrimary: COLOR_PRIMARY}}}>
                <RouterProvider router={router} />
            </ConfigProvider>
        </React.StrictMode>
    );
}

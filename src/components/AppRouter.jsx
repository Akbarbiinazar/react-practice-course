import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import { routes } from '../router'
import Navbar from './UI/Navbar/Navbar'
import { publicRoutes, privateRoutes } from '../router/index'
import Login from '../pages/Login'

export default function AppRouter() {
    const isAuth = false;
    return (
        <BrowserRouter>

            <Navbar />
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}

                    />
                )}
                <Route path='/error' element={<Error />} />
                {/* <Navigate to='/error' /> */}
            </Routes>
            {/* < Routes >
                {
                    publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}

                        />
                    )
                }
                < Route path='/login' element={< Login />} />
            </ Routes> */}
        </BrowserRouter >
    )
}

import React from "react";
import Login from "./pages/login";
import Register from './pages/register'
export  const router = [
    {path:'/login',exact:true,element:<Login/>},
    {path:'/register',element:<Register/>},
]

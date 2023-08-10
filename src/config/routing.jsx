import React from 'react'
import Layout from '../Layouts/Layout'
import { Route, Routes } from 'react-router-dom'
import {forgotpassword, home, resetpassword} from './routeConts'
import Signin from '../pages/Signin'
import Forgotpassword from '../pages/Forgotpassword'
import ResetPassword from '../pages/ResetPassword'
const Routing = () => {
  return (
  <Routes>
    <Route path={home} element={<Layout />}>
        <Route index element={<Signin />}/>
        <Route path={forgotpassword} element={<Forgotpassword />} />
        <Route path={resetpassword} element={<ResetPassword />} />
    </Route>
  </Routes>
  )
}

export default Routing
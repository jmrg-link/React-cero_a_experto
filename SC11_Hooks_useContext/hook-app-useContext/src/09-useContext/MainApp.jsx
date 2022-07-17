import { Navigate, Route, Routes } from 'react-router-dom'

import { UserProvider } from './context/UserProvider'

import { HomePage , LoginPage , AboutPage , Navbar } from './'


export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar/>
      <hr/>

      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/about' element={ <AboutPage/> } />
        
        // redirect
        <Route path='/*' element={ <Navigate to="/"/> } />
        {/*<Route path='/*' element={<LoginPage/> }/>*/}
      </Routes>
    </UserProvider>
  )
}

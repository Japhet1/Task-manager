import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import SignInPage from './Pages/SignInPage';
import Dashboard from './Pages/dashboard';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from './stores/store';
import RegisterPage from './Pages/RegisterPage';




const App = () => {
  
  

  return (
    <main className="font-candara">
      {/* <BrowserRouter>
        
        <Routes>
          <Route path='/' element={ !isLoggedIn  ? <Dashboard/> : <Navigate to='/signup' />} />
          <Route path='/login' element={ isLoggedIn  ? <SignInPage/> : <Navigate to='/' /> } />
          <Route path='/signup' element={ !isLoggedIn  ? <SignUpPage/> : <Navigate to='/' /> } />
        </Routes>
        <Footer/>
      </BrowserRouter> */}
      <BrowserRouter>
        
        <Routes>
          <Route path="*" element={<RegisterPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<SignInPage/>} />
          <Route path='/signup' element={<RegisterPage/>} />
          {/* <Route path="/home" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard/>} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </main>
  )
  
}

export default App


// const PrivateRoute: React.FC = () => {
//   const currentUser = useSelector((state: RootState) => state.user.currentUser);

//   return currentUser ? <Outlet /> : <Navigate to={''} />

// }
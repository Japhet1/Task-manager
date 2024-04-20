import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import SignInPage from './Pages/SignInPage';
import Dashboard from './Pages/dashboard';
import RegisterPage from './Pages/RegisterPage';


const App = () => {

  return (
    <main className="font-candara">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RegisterPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/login' element={<SignInPage/>} />
          <Route path='/signup' element={<RegisterPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </main>
  )
  
}

export default App

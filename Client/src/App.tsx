import React from 'react'
import SignUpPage from './Pages/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import SignInPage from './Pages/SignInPage';
import Dashboard from './Pages/dashboard';




const App = () => {
  

  return (
    <main className="font-candara">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<SignUpPage/>} />
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </main>
  )
  
}

export default App
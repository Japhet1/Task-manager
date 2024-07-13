import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import SignInPage from './Pages/SignInPage';
import Dashboard from './Pages/Dashboard';
import RegisterPage from './Pages/RegisterPage';
import { Toaster } from "./components/ui/toaster"


const App = () => {

  return (
    <div className="flex flex-col min-h-screen font-candara ">
      <div className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/signup" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster />
      <Footer className="bottom-0" />
    </div>
  )
  
}

export default App

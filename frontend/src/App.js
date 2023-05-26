import '../src/App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TermsConditionPage from './pages/TermsConditionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NoPage from './pages/NoPage';

import Navigation from './component/Navigation';
import FloatingActionButton from "./component/FloatingActionButton";
import Footer from './component/Footer';

import './config/firebase';
import { auth } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = ()=> {
  const [isLogin, setIsLogin] = useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    const auth = getAuth();
    onAuthStateChanged(auth, (result)=>{
      if(result){
        setIsLogin(true)
        setLoading(false)
        return
      }

      setIsLogin(false)
      setLoading(false)
    })
  },[])
  
  if(loading){
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}> 
        <img src="https://i.postimg.cc/9MhJ5bx9/logo.png" alt="kozshop" width="60" height="60" className="me-2 rounded-circle shadow-4-strong"/>
        Loading... 
      </div>
    )
  }

  return(
    <>
      <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element = { <HomePage /> } />
            <Route path="/termscondition" element = {<TermsConditionPage />} />
            <Route path="/privacypolicy" element = {<PrivacyPolicyPage />} />
            { isLogin ? (
              <>
                <Route path="/login" element={<Navigate to="/"/>} />
                <Route path="/register" element={<Navigate to="/"/>} />
                <Route path="/profile" element={<ProfilePage />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<Navigate to="/login"/>} />
              </>
            )}
            <Route path="*" element = {<NoPage />} />
          </Routes>
          <FloatingActionButton />
          <Footer />
        </Router>
    </>
  )
}

export default App;
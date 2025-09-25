import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice"
import {Header,Footer} from "./components/index"
import { Outlet } from "react-router-dom";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch =  useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData)); 
        } else {
          dispatch(logout()); 
        }
      } catch (err) {
      
        if (err.message.includes("missing scopes") || err.code === 401) {
          dispatch(logout());
        } else {
          console.error("Auth check failed:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  return !loading ? (<div className="min-h-screen flex flex-wrap content-between gradient-bg">
    <div className="w-full block">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>) : null
}

export default App

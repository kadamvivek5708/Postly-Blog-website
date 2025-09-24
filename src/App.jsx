import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux';
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice"
import {Header,Footer} from "./components/index"
import { Outlet } from "react-router-dom";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch =  useDispatch();

  // useEffect(() => {
  //   authService.getCurrentUser()
  //       .then((userData) => {
  //       if (userData) {
  //         dispatch(login(userData))
  //       }
  //       else{
  //         dispatch(logout())
  //       }
  //     })
  //     .finally(() => setLoading(false))
  // },[]);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get the current user session
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData)); // Logged in
        } else {
          dispatch(logout()); // No user
        }
      } catch (err) {
        // Handle unauthorized (guest) gracefully
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

  return !loading ? (<div className="min-h-screen flex flex-wrap content-between bg-gray-200">
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

import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice';
import authService from '../../appwrite/auth'  // check here

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => dispatch(logout()))
        .catch((error) => console.log("Logout Failed. Error: ",error))
    }

  return (
    <button className='inline-block px-6 py-3 duration-300 text-light hover:bg-secondary hover:text-primary rounded-full font-medium transition-all transform hover:scale-105'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn




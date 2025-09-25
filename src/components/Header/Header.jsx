import React from 'react';
import {Container,Logo,LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name:"Home",
      slug:'/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "My Posts",
        slug: "/my-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]
  return (
    <header className='py-4 shadow-lg bg-primary backdrop-blur-sm bg-opacity-95'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto space-x-2'>
            {navItems.map((item) => (
              item.active ? 
                (<li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className='inline-block px-6 py-3 duration-300 text-light hover:bg-secondary hover:text-primary rounded-full font-medium transition-all transform hover:scale-105'>
                    {item.name}
                  </button>
                </li>) 
              : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
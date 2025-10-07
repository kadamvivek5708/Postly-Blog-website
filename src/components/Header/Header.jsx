import React, { useState } from 'react';
import {Container,Logo,LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
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
    <header className='py-4 shadow-lg bg-primary bg-opacity-95 backdrop-blur-sm sticky top-0 z-40'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4 flex items-center'>
            <Link to='/' className='inline-flex items-center'>
              <Logo width='150px'/>
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex ml-auto space-x-2 items-center'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-3 text-light hover:bg-secondary hover:text-primary rounded-full font-medium transition-all duration-300 transform hover:scale-105'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className='ml-auto md:hidden inline-flex items-center justify-center p-2 rounded-lg text-light hover:bg-secondary hover:text-primary transition-colors duration-300'
            aria-label='Toggle navigation'
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className='md:hidden mt-3 rounded-2xl border border-accent/20 bg-primary/95 backdrop-blur-sm card-shadow'>
            <ul className='py-2'>
              {navItems.map((item) => (
                item.active ? (
                  <li key={item.name} className='px-2'>
                    <button
                      onClick={() => { setMenuOpen(false); navigate(item.slug) }}
                      className='w-full text-left px-4 py-3 text-light hover:bg-secondary hover:text-primary rounded-lg font-medium transition-all duration-300'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              ))}
              {authStatus && (
                <li className='px-2'>
                  <div className='px-4 py-2'>
                    <LogoutBtn/>
                  </div>
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
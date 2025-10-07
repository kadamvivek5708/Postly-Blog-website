import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-primary text-light py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Logo + Tagline */}
          <div>
            <div className="mb-4 inline-flex items-center">
              <Logo alt="logo" width={190} height={150} />
            </div>
            <p className="text-gray-300">Your Content, Always Live</p>
          </div>

          {/* Right: Nav + Socials */}
          <div className="flex flex-col md:items-end gap-6">
            <nav>
              <ul className="flex flex-wrap gap-6 text-gray-300">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </nav>
            <div className="flex items-center gap-4 text-gray-300">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.633 7.997c.013.176.013.353.013.529 0 5.386-4.099 11.6-11.6 11.6-2.305 0-4.452-.676-6.257-1.84.322.037.63.05.965.05a8.19 8.19 0 0 0 5.081-1.75 4.095 4.095 0 0 1-3.822-2.837c.25.038.5.063.764.063.366 0 .732-.05 1.073-.138A4.087 4.087 0 0 1 2.8 9.427v-.05c.55.302 1.2.49 1.884.516A4.083 4.083 0 0 1 2.78 6.73c0-.765.2-1.466.55-2.08a11.62 11.62 0 0 0 8.425 4.27 4.613 4.613 0 0 1-.1-.937 4.083 4.083 0 0 1 7.067-2.795 8.06 8.06 0 0 0 2.593-.987 4.1 4.1 0 0 1-1.796 2.256 8.17 8.17 0 0 0 2.356-.64 8.797 8.797 0 0 1-2.242 2.35z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.858 10.937c.575.1.787-.25.787-.55 0-.275-.013-1.188-.013-2.15-2.875.625-3.487-1.237-3.487-1.237-.525-1.337-1.288-1.7-1.288-1.7-1.051-.713.075-.7.075-.7 1.163.087 1.775 1.2 1.775 1.2 1.038 1.787 2.725 1.275 3.388.975.1-.75.4-1.275.725-1.562-2.3-.262-4.713-1.15-4.713-5.112 0-1.125.4-2.05 1.05-2.775-.1-.262-.463-1.325.1-2.75 0 0 .875-.275 2.875 1.05A9.91 9.91 0 0 1 12 7.25c.887.013 1.787.125 2.625.362 2-.  
                  1.325 2.875-1.05 2.875-1.05.563 1.425.2 2.488.1 2.75.65.725 1.05 1.65 1.05 2.775 0 3.975-2.425 4.85-4.725 5.113.413.363.775 1.063.775 2.15 0 1.563-.013 2.825-.013 3.212 0 .3.2.662.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H19v-4.9c0-1.17-.02-2.67-1.63-2.67-1.64 0-1.89 1.28-1.89 2.58V21h-4V9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-accent/20 text-gray-400 text-sm">© {new Date().getFullYear()} Postly. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
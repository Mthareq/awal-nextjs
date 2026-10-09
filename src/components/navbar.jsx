import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

export default function Navbar() {

    const[isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <nav className="w-full max-w-7xl px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-3xl md:rounded-full transition-all duration-300">
            <div className="flex items-center justify-between w-full">

                <div className={isOpen ? "hidden md:flex" : "flex"}>
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-black">
                        <img src={logo} alt="logo" className="h-8 w-auto object-contain"/>
                        <span className="text-2xl font-bold tracking-tight">MTH Group</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm tracking-wider font-medium text-gray-600 uppercase">
                    <Link to="/" className="hover:text-black transition-colors">Home</Link>
                    <Link to="/galeri" className="hover:text-black transition-colors">Galeri</Link>
                    <Link to="/services" className="hover:text-black transition-colors">Services ▾</Link>
                    <Link to="/about" className="hover:text-black transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>

                <Link to="/contact" className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all">
                    Let's talk
                </Link>

                {!isOpen && (
                        <button onClick={() => setIsOpen(true)} className="md:hidden text-black p-1 focus:outline-none ml-auto">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    )}
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-left w-full text-left gap-6">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-bold text-xl text-black">
                        <img src={logo} alt="logo" className="h-8 w-auto object-contain"/>
                        <span className="text-2xl font-bold tracking-tight">MTH Group</span>
                    </Link>

                    <div className="flex flex-col gap-4 text-base font-semibold text-gray-700 uppercase tracking-wider w-full items-start">
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-black py-1 w-full text-left">Home</Link>
                        <Link to="/galeri" onClick={() => setIsOpen(false)} className="hover:text-black py-1 w-full text-left">Galeri</Link>
                        <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-black py-1 w-full text-left">Services</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-black py-1 w-full text-left">About</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-black py-1 w-full text-left">Contact</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="px-5 py-2 text-center text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all mt-2">
                            Let's talk
                        </Link>

                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="text-black p-1 focus:outline-none flex items-center justify-start mt-2"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    
                    </div>
                    
                </div>
            )}
        </nav>
        </header>
    )
}
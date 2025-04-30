import { navLinks } from "../constants/constant"
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <header>
            <div className="container flex items-center justify-between w-[1440px] mx-auto py-[30px]">
                <div className="flex items-center w-[15%]">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="h-[27px]"
                    />
                </div>

                {/* For desktop */}

                <nav className="hidden md:flex items-center justify-start w-[65%] space-x-8">
                    {navLinks.map((link, index) => (
                        <a id={index} href={link.href} className="text-black-50 ">{link.label}</a>
                    ))}
                </nav>
                <div className="hidden w-[20%] md:block">
                    <button className="bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                        <a href="#"> Get started</a>
                    </button>
                </div>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors mx-4 mt-2">
                                Get started
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

function MenuList() {
  return (
    <ul>
      <li> <Link href="/"> Home</Link></li>
      <li> <Link href="#servicios"> about us</Link></li>
      <li> <Link href="/products"> products</Link></li>
      <li> <Link href="/services"> services</Link></li>
      <li> <Link href="/skills"> skills</Link></li>
      <li> <Link href="#servicios2">contacts</Link></li>
    </ul>
  );
}

export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 35) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={isSticky ? "sticky" : ""}>
      <nav className="navbar">
        <div className={`container ${isMenuOpen ? 'open' : ''}`}>
          <div className="imageContent">
            <img src="https://firebasestorage.googleapis.com/v0/b/albalonweb.appspot.com/o/Identidad%20Grafica%2Flogo%20ecoret.png?alt=media&token=85265186-3e48-4a19-b8e4-7d5371ae118b" alt="" />
          </div>
          <div className="navContent">
            <MenuList />
          </div>
          <div className='nav-button-close' onClick={handleMenuToggle}></div>
          <div className='nav-button' onClick={handleMenuToggle}></div>
          <div className="nav-mobile">
            <div className='menu-wrapper'>
              <div className='menu-contain'>
              <img src="https://firebasestorage.googleapis.com/v0/b/albalonweb.appspot.com/o/Identidad%20Grafica%2Flogo%20ecoret.png?alt=media&token=85265186-3e48-4a19-b8e4-7d5371ae118b" alt="" />
                <MenuList />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

  );
}



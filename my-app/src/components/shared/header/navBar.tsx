"use client"

import { Scrolling } from "@/services/scrolling";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuList from "./menuList";

export default function Nav( ) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Scrolling(35, setIsSticky);  
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



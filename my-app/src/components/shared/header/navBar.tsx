"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isSticky, setIsSticky] = useState(false);
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
      
    return (
        <header className={isSticky ? "sticky" : ""}>
            <nav className="navbar">
            <div className="container">
                <div className="imageContent">
                    <img src="https://firebasestorage.googleapis.com/v0/b/albalonweb.appspot.com/o/Identidad%20Grafica%2FLogoestado2.png?alt=media&token=a0be48a1-58e1-46c5-b8c9-c85696a6b16c" alt="" />
                </div>
                <div className="navContent">
                    <ul>
                        <li> <Link href="/"> Home</Link></li>
                        <li> <Link href="#servicios"> about us</Link></li>
                        <li> <Link href="/products"> products</Link></li>
                        <li> <Link href="/services"> services</Link></li>
                        <li> <Link href="/skills"> skills</Link></li>
                        <li> <Link href="#servicios2">contacts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        
    );
}



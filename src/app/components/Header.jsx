'use client'
import { useEffect, useRef, useState } from 'react';

export default function Header() {

    // const collapseNavbar = useRef(null);
    // const navbar = useRef(null);
    // const [menuOpen, setMenuOpen] = useState(false);
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true);

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    // useEffect(() => {
    //     function handleScroll() {
    //         const currentScrollPos = window.pageYOffset;
    //         setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    //         setPrevScrollPos(currentScrollPos);
    //         if (currentScrollPos > 10) {
    //             navbar.current.classList.remove("bg-transparent");
    //             navbar.current.classList.add("bg-[var(--background)]");
    //             navbar.current.classList.add("shadow-2xl");
    //             navbar.current.classList.add("shadow-[var(--nav-shadow)]");
    //         }
    //         if (currentScrollPos < 10) {
    //             navbar.current.classList.remove("bg-[var(--background)]");
    //             navbar.current.classList.add("bg-transparent");
    //             navbar.current.classList.remove("shadow-2xl");
    //             navbar.current.classList.remove("shadow-[var(--nav-shadow)]");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [prevScrollPos, visible]);

    return (
        <>
            <nav id='desktop-nav'>
                <div className='logo'>
                    <a href='/'>{"{ martin }"}</a>
                </div>
                <ul className='nav-links'>
                    <li><a href='#AboutMe'>Sobre Mi</a></li>
                    <li><a href='#MyProjects'>Mis Projectos</a></li>
                    <li><a href='#Contact'>Contacto</a></li>
                </ul>
            </nav>
            <nav id='hamburger-nav'>
                <div className='logo'>
                    {"{martin}"}
                </div>
                <div className='hamburger-logo'>
                    <div className='hamburger-icon' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='menu-links'>
                        <li><a href='#AboutMe'>About Me</a></li>
                        <li><a href='#MyProjects'>My Projects</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </div>
                </div>
            </nav>
        </>
    )
}


'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import "./header.css";
export default function Header() {      
  const path = usePathname()
    function mobileMenu() {
        const navMenu = document.querySelector(".nav-menu");
        const hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }       
  return (
    <header>
      <div className="menu_wrapper">
        <button>
          <div className={path =='/pages/recommend' || path =='/pages/country_wise'?"hamburger theme_bg_color":'hamburger'} onClick={mobileMenu}>
            <span className={path =='/pages/recommend' || path =='/pages/country_wise'? "bar bg_white":"bar" }></span>
            <span className={path =='/pages/recommend' || path =='/pages/country_wise'? "bar bg_white":"bar" }></span>
            <span className={path =='/pages/recommend' || path =='/pages/country_wise'? "bar bg_white":"bar" }></span>
          </div>
          <nav className="navbar">
            <ul className="nav-menu">
            <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
            <li className="nav-item">
                <Link href="/pages/recommend" className="nav-link">
                  Recommendation
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/country_wise" className="nav-link">
                  CountryWise
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <span>
                    <Image
                      src="/instagram.png"
                      alt="instagram_icon"
                      width={22}
                      height={22}
                      priority
                    />
                  </span>
                  Instagram
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  <span>
                    {" "}
                    <Image
                      src="/twiter.png"
                      alt="twiter_icon"
                      width={22}
                      height={22}
                      priority
                    />
                  </span>
                  Twitter
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              
            </ul>
          </nav>
        </button>
      </div>
      <div className="logo_wrapper">
        <Image
          src="/logo.png"
          alt="tripmaster_ai"
          width={204}
          height={38}
          priority
          
        />
      </div>
      <div className={path =='/pages/recommend' || path =='/pages/country_wise'? "signup_wrapper bg_color":"signup_wrapper"}>
        <Link href="#">{path =='/pages/recommend' || path =='/pages/country_wise'? 'Plan my trip':'Sign in'}</Link>
      </div>
    </header>
  );
}

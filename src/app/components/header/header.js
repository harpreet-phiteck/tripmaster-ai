'use client'
import Image from "next/image";
import "./header.css";
export default function Header() {      
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
          <div className="hamburger" onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">
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
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
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
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Terms of Use
                </a>
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
      <div className="signup_wrapper">
        <a href="#">Sign in</a>
      </div>
    </header>
  );
}

import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Header(){

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <img src="./images/uniben-logo-2.png" alt="logo"/>
            <nav ref={navRef}>
                <div className="line"/>
                <div>
                    <a href="/#">Home</a>
                    <p>Welcome to SIWES</p>
                </div>
                <div className="line"/>
                <div>
                    <a href="/#">Benefit</a>
                    <p>Welcome to SIWES</p>
                </div>
                <div className="line"/>
                <div>
                    <a href="/#">Courses</a>
                    <p>Welcome to SIWES</p>
                </div>
                <div className="line"/>
                <div>
                    <a href="/#">Siwes</a>
                    <p>Welcome to SIWES</p>
                </div>
                <div><a href="/#" className="header-signup">Login</a></div>
                <div><a href="/#" className="header-signup">Sign Up</a></div>
                
                <button onClick={showNavbar} className="nav-btn nav-close-btn">
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Header;
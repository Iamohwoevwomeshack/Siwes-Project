import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";

function Footer(){
    const year = new Date().getFullYear();

    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="./images/siwes-logo.png" alt="siwes-logo"/>
                <h3>The Student Work Experience Scheme(SIWES)
                    is a skills training programme designed to expose and prepare
                    students of universityies and other tertiary institutions for the 
                    Industrial Work situation they are likely to meet after graduation.
                </h3>
            </div>

            <div className="footer-grid">
                <div>
                    <h3>MENU</h3>
                    <ul>
                        <li><a href="/#">Homepage</a></li>
                        <li><a href="/#">About Information</a></li>
                        <li><a href="/#">Courses Page</a></li>
                        <li><a href="/#">Features and Benefits</a></li>
                        <li><a href="/#">Industrial Training</a></li>
                        <li><a href="/#" className="footer-color-purple">Register Company</a></li>
                        <li><a href="/#" className="footer-color-purple">Company Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>MENU</h3>
                    <ul>
                        <li><a href="/#">Portal Login</a></li>
                        <li><a href="/#">Sign Up</a></li>
                        <li><a href="/#" className="footer-color-purple">Lecturer Register</a></li>
                        <li><a href="/#" className="footer-color-purple">Lecturer Login</a></li>
                    </ul>

                    <h3>HELP & SUPPORT</h3>
                    <ul>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-uniben">
                    <div>
                        <img src="./images/uniben-logo.png" alt="uniben-logo"/>
                    </div>
                        <h2>UNIVERSITY OF BENIN</h2>
                        <h4>BENIN CITY, NIGERIA</h4>
                        <p>Knowledge for Service</p>
                </div>
                <div>
                    <ul className="footer-icons">
                        <li><a href="/#"><FaFacebookSquare className="footer-social-icons"/></a></li>
                        <li><a href="/#"><FaTwitterSquare className="footer-social-icons"/></a></li>
                        <li><a href="/#"><FaInstagramSquare className="footer-social-icons"/></a></li>
                        <li><a href="/#"><FaLinkedin className="footer-social-icons"/></a></li>
                    </ul>
                </div>
            </div>

            <div  className="footer-grid-item">
                <a href="/#"><FaFacebookSquare className="footer-social-icons-item"/></a>
                <a href="/#"><FaTwitterSquare className="footer-social-icons-item"/></a>
                <a href="/#"><FaInstagramSquare className="footer-social-icons-item"/></a>
                <a href="/#"><FaLinkedin className="footer-social-icons-item"/></a>
            </div>

            <p className="footer-copyright">Copyright © {year}, University of Benin</p>
        </div>  
    )
}

export default Footer;
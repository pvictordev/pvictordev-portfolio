import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h1 className="footer__title">pvictordev</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a> 
                </li>

                <li>
                    <a href="#projects" className='footer__link'>Projects</a> 
                </li>

                <li>
                    <a href="#testimonials" className='footer__link'>Testimonials</a> 
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://github.com/pvictordev" className="footer__social-link"
            target='_blank'
            >
            <i className="bx bxl-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/victor-purice-204229276/" className="footer__social-link"
            target='_blank'
            >
                <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://twitter.com/wftpid" className="footer__social-link"
            target='_blank'
            >
                <i className="bx bxl-twitter"></i>
            </a>
            </div>

            <span className="footer__copy"> &#169;pvictordev. All right deserved</span>
        </div>
    </footer>
  )
}

export default Footer

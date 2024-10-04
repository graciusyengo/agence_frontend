import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>We are a leading company in providing quality services.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"  target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp  "></i>
            </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
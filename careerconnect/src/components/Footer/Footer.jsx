import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>JobHub</h2>
          <p>
            Find your dream job with trusted companies
            around the world.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Job Categories</h3>

          <p>Remote Jobs</p>
          <p>Full-Time</p>
          <p>Part-Time</p>
          <p>Contract</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Lagos, Nigeria</p>
          <p>📧 support@jobhub.com</p>
          <p>📞 +234 800 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 JobHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
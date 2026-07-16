import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {motion} from "framer-motion"

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav className="navbar"
    initial={{y: -80,opacity:  0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.8}}
    >
      <motion.div className="logo"
      initial={{x: -50,opacity: 0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.6, delay:0.3}}
      >
        <h2>JobConnect</h2>
      </motion.div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <motion.li
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/">Home</Link>
</motion.li>

        <motion.li
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/jobs">Jobs</Link>
</motion.li>

        <motion.li
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/companies">Companies</Link>
</motion.li>

        <motion.li
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/about">About</Link>
</motion.li>

        <motion.li
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <Link to="/contact">Contact</Link>
</motion.li>

        <li className="btn">
          <Link to="/login"><motion.button
          initial={{ x: 30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }}

          >Login</motion.button
          
          
          >
          </Link>
          <Link to="/Register"><button>Register</button></Link>
        </li>
      </ul>

      <button
        type="button"
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </motion.nav>
  );
}

export default Navbar;

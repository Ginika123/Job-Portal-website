import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Register.css";
import { motion } from "framer-motion";

function Register() {
  function submit(event) {
    event.preventDefault();
    alert("Account Created Successfully 🎉");
    event.target.reset();
  }

  return (
    <>
      <Navbar />

      <section className="register-page">
        <div>
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="heading2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create Account
            </motion.h3>

            <motion.p
              className="box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join JobConnect and start applying for jobs today.
            </motion.p>

            <motion.input
              type="text"
              id="fullName"
              placeholder="Enter your fullName"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <motion.input
              type="email"
              id="email"
              placeholder="Enter your email"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.input
              type="password"
              id="password"
              placeholder="Enter your password"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />

            <motion.button
              type="submit"
              className="connect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

export default Register;
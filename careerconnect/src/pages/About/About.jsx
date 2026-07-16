import "./About.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

function About() {
  // Parent animation for Mission Cards
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card animation
  const card = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Navbar />

      <section className="about">
        <div className="container">
          <motion.h1
            className="about1"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About CareerConnect
          </motion.h1>

          <motion.p
            className="about2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            CareerConnect is a modern job portal designed to connect talented
            professionals with trusted employers. We simplify the job search
            process and help companies discover the right talent quickly and
            efficiently.
          </motion.p>
        </div>

        <motion.div
          className="about-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/jobs" className="browse-btn">
              Browse Jobs
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            // src="/about-hero.png"
            // alt="CareerConnect Team"
          />
        </motion.div>
      </section>

      <section className="story">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          <motion.p
            className="story-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CareerConnect was created with a simple mission: to bridge the gap
            between talented professionals and companies looking for the right
            talent. We believe that finding the right job or hiring the right
            employee should be simple, fast, and stress-free.
            <br />
            Our platform brings together job seekers and employers in one trusted
            environment where opportunities are created every day. Whether you
            are searching for your dream job or looking to hire exceptional
            talent, CareerConnect is here to help you succeed.
          </motion.p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Mission, Vision & Goal
          </motion.h2>

          <motion.div
            className="mission-cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="mission-card"
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                🎯
              </motion.div>

              <h3>Our Mission</h3>

              <p>
                To connect talented professionals with trusted employers
                through a simple, secure, and modern recruitment platform.
              </p>
            </motion.div>

            <motion.div
              className="mission-card"
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                👁️
              </motion.div>

              <h3>Our Vision</h3>

              <p>
                To become one of the world's most trusted job portals,
                helping millions of people build successful careers.
              </p>
            </motion.div>

            <motion.div
              className="mission-card"
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                🚀
              </motion.div>

              <h3>Our Goal</h3>

              <p>
                To simplify recruitment by making it easier for companies
                to hire and for job seekers to find meaningful work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
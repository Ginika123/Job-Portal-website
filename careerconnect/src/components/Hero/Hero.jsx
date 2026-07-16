import "./Hero.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {motion} from "framer-motion"
import Counter from "../Counter/Counter";

function Hero({


  
  search,
  setSearch,
  filter,
  setFilter,
}) {


  const words = ["Find", "Your", "Dream", "Job", "Today"];

const [typedText, setTypedText] = useState("");
const [index, setIndex] = useState(0);

const [startCount, setStartCount] = useState(false);

useEffect(() => {
  if (index < words.length) {
    const timer = setTimeout(() => {
      setTypedText((prev) => prev + " " + words[index]);
      setIndex(index + 1);
    }, 800);

    return () => clearTimeout(timer);
  }
}, [index]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Searching:", search);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">🚀 #1 Job Portal Platform</span>

        <h1>
  {typedText.includes("Dream") ? (
    <>
      {typedText.split("Dream")[0]}
      <span>Dream Job</span>
      {typedText.includes("Today") ? " Today" : ""}
    </>
  ) : (
    typedText
  )}
</h1>

        {index === words.length && (
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Discover thousands of verified job opportunities from top companies
    across the world.
  </motion.p>
)}

        <motion.div className="search-box"

        className="search-box"
  initial={{ opacity: 0, y: 30 }}
  animate={
    index === words.length
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 }
  }
  transition={{ duration: 0.8, delay: 0.3 }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search jobs, companies or skills..."
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Jobs</option>
            <option value="remote">Remote</option>
          </select>
        </motion.div>

        <motion.div className="hero-buttons"

        initial={{ opacity: 0, y: 30 }}
  animate={
    index === words.length
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 }
  }
  transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/jobs">Get Started </Link>

          <button
            className="secondary-btn"
            onClick={() => {
              const jobsSection = document.querySelector(".job-list");

              if (jobsSection) {
                jobsSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Browse Jobs
          </button>
        </motion.div>

        <div className="hero-stats">
          <div className="stat">
            <Counter end={12000} start={startCount} />
            <p>Jobs Available</p>
          </div>

          <div className="stat">
            <Counter end={800} start={startCount} />
            <p>Companies</p>
          </div>

          <div className="stat">
            <Counter end={25000} start={startCount} />
            <p>Active Users</p>
          </div>
        </div>
      </div>

      <motion.div className="hero-image"
      initial={{ opacity: 0, x: 100 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: {
      duration: 0.8,
      delay: 1.2,
    },
    x: {
      duration: 0.8,
      delay: 1.2,
    },
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
      >
        <div className="image-placeholder">
          <h2>👨‍💻</h2>
          <p>Professional Illustration Here</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
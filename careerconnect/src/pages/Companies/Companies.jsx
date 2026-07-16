import Navbar from "../../components/Navbar/Navbar";
import "./Companies.css";
import companies from "../../data/Companies";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Companies() {
  // Parent animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
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

      <section className="companies">
        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Top Hiring Companies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover trusted companies offering exciting career opportunities
            across different industries.
          </motion.p>

          <motion.div
            className="companies-page"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {companies.map((company) => (
              <motion.div
                key={company.id}
                className="company-card"
                variants={card}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                />

                <h2>{company.name}</h2>

                <p className="industry">{company.industry}</p>

                <p className="location">
                  📍 {company.location}
                </p>

                <p className="jobs">
                  {company.jobs} Open Jobs
                </p>

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/companies/${company.id}`}
                    className="view-btn"
                  >
                    View Company
                  </Link>
                </motion.div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Companies;
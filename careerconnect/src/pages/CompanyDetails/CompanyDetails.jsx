import "./CompanyDetails.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import companies from "../../data/companies";

function CompanyDetails() {
  const { id } = useParams();

  const company = companies.find(
    (company) => company.id === Number(id)
  );

  if (!company) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Company Not Found
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="company-details">
        <div className="container">
          <div className="company-header">
            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />

            <div className="company-info">
              <h1>{company.name}</h1>

              <p className="rating">⭐ {company.rating} / 5.0</p>

              <p className="industry">{company.industry}</p>

              <p className="location">📍 {company.location}</p>
            </div>
          </div>

          <div className="company-content">
            <h2>About Company</h2>

            <p className="description">
              {company.description}
            </p>

            <div className="company-stats">
              <div className="stat-card">
                <h3>Founded</h3>
                <p>{company.founded}</p>
              </div>

              <div className="stat-card">
                <h3>Employees</h3>
                <p>{company.employees}</p>
              </div>

              <div className="stat-card">
                <h3>Open Jobs</h3>
                <p>{company.jobs}</p>
              </div>
            </div>

            <h2>Employee Benefits</h2>

            <ul className="benefits-list">
              {company.benefits.map((benefit, index) => (
                <li key={index}>✅ {benefit}</li>
              ))}
            </ul>

            <div className="company-buttons">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="website-btn"
              >
                Visit Website
              </a>

              <Link to="/jobs" className="jobs-btn">
  View Open Jobs
</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyDetails;
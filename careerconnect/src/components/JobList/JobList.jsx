import "./JobList.css";
import { Link } from "react-router-dom";

function JobList({ jobs }) {
  const saveJob = (job) => {
    let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const exists = saved.find((j) => j.id === job.id);

    if (!exists) {
      saved.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(saved));
      alert("Job saved successfully!");
    } else {
      alert("This job is already saved.");
    }
  };

  return (
    <section className="job-list">
      <div className="job-list-header">
        <h2>Latest Job Openings</h2>
        <p>Browse the latest opportunities from top companies.</p>
      </div>

      <div className="job-cards">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>

              <p>
                <strong>Company:</strong>{" "}
                {job.company_name || "Unknown Company"}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {job.candidate_required_location || "Not specified"}
              </p>

              <button onClick={() => saveJob(job)}>
                ❤️ Save Job
              </button>

              <Link
                to={`/jobs/${job.id}`}
                style={{ textDecoration: "none" }}
              >
                <button>View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="empty-jobs">
            No jobs found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}

export default JobList;
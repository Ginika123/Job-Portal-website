import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useJobs from "../../hooks/useJobs";

function JobDetails() {
  const { id } = useParams();
  const { jobData, loading } = useJobs();

  const job = jobData.find((job) => job.id.toString() === id);

  if (loading) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center" }}>Loading job...</p>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center" }}>Job not found</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>{job.title}</h1>

        <h3>{job.company_name}</h3>

        <p>
          <strong>Location:</strong> {job.candidate_required_location}
        </p>

        <hr />

        <div
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        <button
  onClick={() => window.open(job.url, "_blank")}
  style={{
    marginTop: "20px",
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  }}
>
  Apply Now
</button>
      </main>
    </>
  );
}

export default JobDetails;
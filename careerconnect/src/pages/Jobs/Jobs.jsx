import Navbar from "../../components/Navbar/Navbar";
import JobList from "../../components/JobList/JobList";
import useJobs from "../../hooks/useJobs";

function Jobs() {
  const { jobData, loading, error } = useJobs();

  return (
    <>
      <Navbar />

      {loading && <p style={{ textAlign: "center" }}>Loading jobs...</p>}

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>
          {error}
        </p>
      )}

      {!loading && !error && jobData.length === 0 && (
        <p style={{ textAlign: "center" }}>No jobs found</p>
      )}

      {!loading && !error && jobData.length > 0 && (
        <JobList jobs={jobData} />
      )}
    </>
  );
}

export default Jobs;
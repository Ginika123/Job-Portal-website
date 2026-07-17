import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import JobList from "../../components/JobList/JobList";
import useJobs from "../../hooks/temp";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const { jobData, loading, error } = useJobs();

  const filteredJobs = jobData
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((job) => {
      if (filter === "remote") {
        return (
          job.candidate_required_location &&
          job.candidate_required_location
            .toLowerCase()
            .includes("remote")
        );
      }

      return true;
    });

  function JobSkeleton() {

    console.log(jobData);
    return (
      <div
        style={{
          padding: "15px",
          margin: "10px",
          background: "#f2f2f2",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "15px",
            background: "#ddd",
            marginBottom: "10px",
            borderRadius: "4px",
          }}
        ></div>

        <div
          style={{
            width: "40%",
            height: "15px",
            background: "#ddd",
            borderRadius: "4px",
          }}
        ></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {loading && (
        <>
          <JobSkeleton />
          <JobSkeleton />
          <JobSkeleton />
        </>
      )}

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>
          {error}
        </p>
      )}

      {!loading && !error && filteredJobs.length === 0 && (
        <p style={{ textAlign: "center" }}>
          No jobs found
        </p>
      )}

      {!loading && !error && filteredJobs.length > 0 && (
        <JobList jobs={filteredJobs} />
      )}
    </>
  );
}

export default Home;
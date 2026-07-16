import { useState, useEffect } from "react";

function useJobs() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobData(data.jobs || []);
        console.log(data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load jobs");
        setLoading(false);
      });
  }, []);

  return { jobData, loading, error };
}

export default useJobs;
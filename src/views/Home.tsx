import * as React from "react";
import { fetchJobsFromGithubApi } from "../api/jobs";
import JobCard from "../components/JobCard/JobCard";
import { Job } from "../interfaces/Job";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);

  React.useEffect(() => {
    const fetchJobs = async () => {
      const jobs: Job[] = await fetchJobsFromGithubApi();
      console.log(jobs);

      setJobs(jobs);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard
          company={job.company}
          companyLogo={job.company_logo}
          location={job.location}
          title={job.title}
          type={job.type}
          createdAt={job.created_at}
        />
      ))}
    </div>
  );
};

export default Home;

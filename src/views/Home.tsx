import * as React from "react";
import styled from "styled-components";
import { fetchJobsFromGithubApi } from "../api/jobs";
import JobCard from "../components/JobCard/JobCard";
import { Job } from "../interfaces/Job";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1110px;
  width: 100%;
  margin: 120px auto 0px auto;
  grid-column-gap: 30px;
`;

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
    <Container>
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
    </Container>
  );
};

export default Home;

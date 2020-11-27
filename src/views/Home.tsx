import * as React from "react";
import styled from "styled-components";
import { fetchJobsFromGithubApi } from "../api/jobs";
import JobCard from "../components/JobCard/JobCard";
import { Job } from "../interfaces/Job";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1110px;
  width: 100%;
  margin: 120px auto 0px auto;
  grid-column-gap: 30px;
  grid-row-gap: 49px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Container = styled.div``;

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [page, setPage] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchJobs = React.useCallback(async () => {
    const jobs: Job[] = await fetchJobsFromGithubApi(page);

    setJobs((currentJobs) => {
      return [...currentJobs, ...jobs];
    });
    setPage((oldPage) => oldPage + 1);
    if (jobs.length < 50) {
      setHasMore(false);
    }
  }, [page]);

  React.useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container>
      <Grid>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            company={job.company}
            companyLogo={job.company_logo}
            location={job.location}
            title={job.title}
            type={job.type}
            createdAt={job.created_at}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

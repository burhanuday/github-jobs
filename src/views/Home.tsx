import * as React from "react";
import JobCard from "../components/JobCard/JobCard";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <JobCard />
    </div>
  );
};

export default Home;

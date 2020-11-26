import * as React from "react";
import styled from "styled-components";
import { H3, H4 } from "../Typography/Heading";
import Text from "../Typography/Text";

const Container = styled.div`
  max-width: 350px;
  min-height: 228px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;
  padding: 32px;
  position: relative;
`;

const Duration = styled(Text)`
  margin-top: 15px;
`;

const Location = styled(H4)`
  color: ${({ theme }) => theme.primary};
`;

const CompanyLogoContainer = styled.div`
  background-color: #df6dae;
  height: 50px;
  width: 50px;
  position: absolute;
  border-radius: 15px;
  top: -25px;
`;

export interface JobCardProps {}

const JobCard: React.FC<JobCardProps> = () => {
  return (
    <Container>
      <CompanyLogoContainer />
      <Duration>Job duration</Duration>
      <H3>Senior software negine</H3>
      <Text>Comparny</Text>
      <Location>Location asdas as</Location>
    </Container>
  );
};

export default JobCard;

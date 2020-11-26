import * as React from "react";
import styled from "styled-components";
import { dateToString } from "../../util/date";
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
  padding: 7px;
`;

const CompanyLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export interface JobCardProps {
  company: string;
  companyLogo: string;
  location: string;
  title: string;
  type: string;
  createdAt: string;
}

const JobCard: React.FC<JobCardProps> = (props) => {
  return (
    <Container>
      <CompanyLogoContainer>
        <CompanyLogo src={props.companyLogo} />
      </CompanyLogoContainer>
      <Duration>
        {dateToString(new Date(props.createdAt))} • {props.type}
      </Duration>
      <H3>{props.title}</H3>
      <Text>{props.company}</Text>
      <Location>{props.location}</Location>
    </Container>
  );
};

export default JobCard;

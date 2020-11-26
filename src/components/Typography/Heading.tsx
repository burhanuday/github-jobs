import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: ${({ theme }) => theme.heading};
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.heading};
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.heading};
`;

export const H4 = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.heading};
`;

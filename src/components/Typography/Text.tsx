import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

export default Text;

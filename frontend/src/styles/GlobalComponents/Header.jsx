import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

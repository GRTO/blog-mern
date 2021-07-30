import styled from "styled-components";

export const CategoryContainer = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background2};
  padding: 0.2rem 0.8rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  border-radius: 100px;
`;

export const CategoryElement = styled.span`
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }
`;

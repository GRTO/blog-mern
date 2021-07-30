import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
`;

export const Description = styled.h3`
  font-family: "Varela Round", sans-serif;
  color: ${(props) => props.theme.colors.subtext};
  padding-top: 0.4rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const Article = styled.article``;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const Timestamp = styled.span`
  color: ${(props) => props.theme.colors.subtext};
  font-family: "Lora", sans-serif;
  font-size: 1.4rem;
`;

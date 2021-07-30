import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 15rem;
  overflow: hidden;
  margin-top: 3rem;
`;

export const Title = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
`;

export const Description = styled.h3`
  font-family: "Varela Round", sans-serif;
  color: ${(props) => props.theme.colors.subtext};
  padding-top: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.4rem;
  color: ${(props) => props.theme.colors.subtext};
`;

export const Timestamp = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  white-space: nowrap;
  font-family: "Josefin Sans", sans-serif;
`;

export const DeleteIcon = styled.img`
  height: 2.5rem;
  cursor: pointer;
`;

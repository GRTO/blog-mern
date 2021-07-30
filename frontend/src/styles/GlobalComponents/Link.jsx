import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Link = ({ props, children }) => (
  <LinkWrapper>
    <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
  </LinkWrapper>
);

export default Link;

import { Container, Main } from "./layoutStyles";

export const Layout = ({ children }) => (
  <Container>
    <Main>{children}</Main>
  </Container>
);

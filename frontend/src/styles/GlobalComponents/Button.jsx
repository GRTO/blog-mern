import styled from "styled-components";

const getBackgroundColor = (type, theme) => {
  switch (type) {
    case "primary":
      return theme.colors.primary;
    case "secondary":
      return theme.colors.secondary;
    case "tertiary":
      return theme.colors.tertiary;
    default:
      return theme.colors.default;
  }
};

export const Button = styled.button`
  width: 25rem;
  height: 3.5rem;
  border: 0.1rem solid
    ${(props) => getBackgroundColor(props.typeButton, props.theme)};
  border-radius: 5rem;
  font-size: 2.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ form }) => (form ? "0" : "0 0 3rem")};
  color: #fff;
  background: ${(props) => getBackgroundColor(props.typeButton, props.theme)};
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 18rem;
    height: 3rem;
    font-size: 1.6rem;
    margin-bottom: 0.7rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 2.5rem;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

export default Button;

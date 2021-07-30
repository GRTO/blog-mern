import styled, { css } from "styled-components";

export const FormEditor = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItem ? props.alignItem : "center")};
  flex: ${(props) => (props.fitHeight ? 1 : null)};

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

/**
 * Reuse CSS styles
 */
const typeAreaStyles = css`
  border: none;
  outline: none;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

export const InputTitle = styled.input`
  ${typeAreaStyles}

  width: 100%;
  font-size: 3rem;
`;

export const TextAreaDescription = styled.textarea`
  ${typeAreaStyles}

  font-size: 2rem;
  width: 100%;
  height: 100%;
`;

export const SelectContainer = styled.div`
  padding-left: 2rem;
  & > div {
    & > div {
      min-width: 200px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;

    & > div {
      & > div {
        min-width: 150px;
      }
    }
  }
`;

export const DateTimeContainer = styled.div`
  padding-right: 2rem;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
    margin-top: 1.5rem;
  }
`;

export const ErrorLabel = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-size: 1.2rem;
  padding: ${(props) => (props.showPadding ? "0 2rem" : "0")};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.showPadding ? "1rem" : "0")};
  }
`;

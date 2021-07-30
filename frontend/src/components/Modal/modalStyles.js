import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.7s ease-in-out;
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  pointer-events: ${(props) => (props.showModal ? "visible" : "none")};
`;

export const ModalContent = styled.div`
  width: 50rem;
  background-color: ${(props) => props.theme.colors.background2};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 30rem;
  }

  transition: all 0.7s ease-in-out;
  transform: ${(props) =>
    props.showModal ? "translateY(-20rem)" : "translateY(0)"};
`;

export const ModalHeader = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const ModalBody = styled.div`
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
`;

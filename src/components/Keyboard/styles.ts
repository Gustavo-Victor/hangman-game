import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Key = styled.button<{ isActive: boolean }>`
  padding: 10px;
  background-color: #333;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #ccc;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 4px 2px rgba(75, 75, 75, 0.3);
  text-transform: uppercase;
  opacity: ${(props) => (props.isActive ? "null" : "0.3")};

  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`;

import styled from "styled-components";
import { Button } from "./Button";
import Lines from "./Lines";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StyledInputContainer = styled.div`
  width: 42rem;
  padding: 10px 10px 10px 10px;
  background-color: #d9d9d9;
  border-radius: 12px;
  position: relative;

  input {
    background-color: #d9d9d9;
    border: none;
    width: 31rem;
    border-radius: 6px;
    font-family: var(--regular);
  }
`;

export default function InputAddItem() {
  return (
    <StyledWrapper>
      <StyledInputContainer>
        <input type="text" />
        <Button type="add" />
      </StyledInputContainer>
      <Lines type="large" />
    </StyledWrapper>
  );
}

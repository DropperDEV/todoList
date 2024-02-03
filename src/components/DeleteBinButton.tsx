import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

interface IDeleteBinButton {
}

const StyledDeleteBinButton = styled.button`
  background-color: #999999;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.18rem;
  padding-right: 0.18rem;
  border-radius: 6px;
  outline: none;
  border: 0 none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function DeleteBinButton() {
  return (
    <StyledDeleteBinButton>
      <RiDeleteBin5Line />
    </StyledDeleteBinButton>
  );
}

import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

const StyledDeleteBinButton = styled.button`
  background-color: #999999;
  padding: 3px 3px 3px 3px;
  border-radius: 6px;
  outline: none;
  border: 0 none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export function DeleteBinButton() {
  return (
    <StyledDeleteBinButton>
      <RiDeleteBin5Line size={23} />
    </StyledDeleteBinButton>
  );
}

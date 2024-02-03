import styled from "styled-components";
import { RiDeleteBin5Line } from "react-icons/ri";

const StyledButtonDelete = styled.button`
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

const StyledButtonAdd = styled(StyledButtonDelete)`
  background-color: #4f4f4f;
  color: #fff;
  padding: 10px 10px 10px 10px;
  border-radius: 12px;
  font-size: large;
  font-family: var(--special);
`;

interface IButton {
  type: string;
}

export function Button({ type }: IButton) {
  return (
    <>
      {type === "delete" && (
        <StyledButtonDelete>
          <RiDeleteBin5Line size={23} />
        </StyledButtonDelete>
      )}
      {type === "add" && <StyledButtonAdd>Adicionar Item</StyledButtonAdd>}
    </>
  );
}

import styled from "styled-components";
import { DeleteBinButton } from "./DeleteBinButton";

const StyledTaskItem = styled.div`
    display: flex;
    flex-direction: row;
`
export default function TaskItem() {
  return (
    <div>
      <p>This is my task</p>
      <DeleteBinButton />
    </div>
  );
}

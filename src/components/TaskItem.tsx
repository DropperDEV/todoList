import styled from "styled-components";
import { Button } from "./Button";

const StyledTaskItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222222;
  padding: 6px 6px 6px 14px;
  border-radius: 6px;
  justify-content: space-between;
  width: 40rem;
  position: relative;


  p {
    font-family: var(--regular);
    font-size: medium;
  }


`;
export default function TaskItem() {
  return (
    <>
      <StyledTaskItem>
        <p>This is my task</p>
        <Button type="delete"/>
      </StyledTaskItem>
    </>
  );
}

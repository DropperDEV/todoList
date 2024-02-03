import styled from "styled-components";
import { Button } from "./Button";
import { Task } from "../interface/Task";

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

interface ITaskItem {
  task: Task;
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskItem({ task, setTaskList }: ITaskItem) {
  function removeItem() {
    setTaskList((items) => items.filter((item) => item.id !== task.id));
  }

  return (
    <>
      <StyledTaskItem>
        <p>{task.text}</p>
        <Button type="delete" onClick={removeItem} />
      </StyledTaskItem>
    </>
  );
}

import styled from "styled-components";
import TaskItem from "./TaskItem";

const StyledTaskMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

interface Task {
  id: number;
  text: string;
}

interface ITaskMain {
  taskList: Array<Task>;
}

export default function TaskMain({ taskList }: ITaskMain) {
  return (
    <StyledTaskMain>
      {taskList.map((task) => (
        <TaskItem taskName={task.text} key={task.id} />
      ))}
    </StyledTaskMain>
  );
}

import styled from "styled-components";
import TaskItem from "./TaskItem";
import { Task } from "../interface/Task";

const StyledTaskMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;


interface ITaskMain {
  taskList: Array<Task>;
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;

}

export default function TaskMain({ taskList, setTaskList }: ITaskMain) {
  return (
    <StyledTaskMain>
      {taskList.map((task) => (
        <TaskItem task={task} key={task.id} setTaskList={setTaskList} />
      ))}
    </StyledTaskMain>
  );
}

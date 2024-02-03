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

const StyledInputContainer = styled.form`
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

interface Task {
  id: number;
  text: string;
}
interface IAddItem{
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  taskList: Array<Task>;
}

export default function InputAddItem({setTaskList,taskList}:IAddItem) {

  function formHandler(e: React.FormEvent) {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;
    const inputElement = formElement.querySelector('input') as HTMLInputElement;
    const newTask = { id: taskList.length + 1, text: inputElement.value };
    console.log(newTask);
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    formElement.reset();
  }
  

  return (
    <StyledWrapper>
      <StyledInputContainer onSubmit={formHandler}>
        <input type="text"/>
        <Button type="add" />
      </StyledInputContainer>
      <Lines type="large" />
    </StyledWrapper>
  );
}

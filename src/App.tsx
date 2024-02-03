import styled from "styled-components";
import InputAddItem from "./components/InputAddItem";
import Title from "./components/Title";
import TaskMain from "./components/TaskMain";
import WriteNote from "./components/WriteNote";
import { useState } from "react";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2%;
`;

interface Task {
  id: number;
  text: string;
}

function App() {
  const [taskList,setTaskList] = useState<Array<Task>>([]);

  return (
    <StyledApp>
      <Title />
      <WriteNote/>
      <InputAddItem setTaskList={setTaskList} taskList={taskList}/>
      <TaskMain taskList={taskList} />
    </StyledApp>
  );
}

export default App;

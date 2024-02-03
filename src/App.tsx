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



function App() {
  const [taskList,setTaskList] = useState<Array<object>>([]);

  return (
    <StyledApp>
      <Title />
      <WriteNote/>
      <InputAddItem setTaskList={setTaskList} taskList={taskList}/>
      <TaskMain setTaskList={setTaskList} taskList={taskList} />
    </StyledApp>
  );
}

export default App;

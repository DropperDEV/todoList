import styled from "styled-components";
import TaskMain from "./components/taskMain";
import InputAddItem from "./components/InputAddItem";
import Title from "./components/Title";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2%;
`;

function App() {
  return (
    <StyledApp>
      <Title />
      <InputAddItem />
      <TaskMain />
    </StyledApp>
  );
}

export default App;

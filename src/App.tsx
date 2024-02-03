import styled from "styled-components";
import InputAddItem from "./components/InputAddItem";
import Title from "./components/Title";
import TaskMain from "./components/TaskMain";
import WriteNote from "./components/WriteNote";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2%;
`;

function App() {
  return (
    <StyledApp>
      <Title />
      <WriteNote/>
      <InputAddItem />
      <TaskMain />
    </StyledApp>
  );
}

export default App;

import styled from "styled-components"
import { DeleteBinButton } from "./components/DeleteBinButton"
import TaskItem from "./components/TaskItem"

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  
  return (
   
      <StyledApp>
        <div>
          <h1>TO-DO NOW</h1>
        </div>
        <div>
          <input type="text" />
          <button>ADD TASK</button>
        </div>
        <TaskItem/>
        
      </StyledApp>
       
    
  )
}

export default App

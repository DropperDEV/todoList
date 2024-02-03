import styled from 'styled-components'
import TaskItem from './TaskItem'

const StyledTaskMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`

export default function TaskMain() {
  return (
    <StyledTaskMain>
    <TaskItem/>
    <TaskItem/>
    <TaskItem/>
    </StyledTaskMain>
  )
}

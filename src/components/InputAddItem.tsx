import styled from "styled-components"
import { Button } from "./Button"

const StyledInputContainer = styled.div`
    width: 40rem;
    padding: 10px 10px 10px 10px;
    background-color: #D9D9D9;
    border-radius: 12px;
    position: relative;

    input{
        background-color: #D9D9D9;
        border: none;
        width: 31rem;
    }
`



export default function InputAddItem() {
  return (
    <StyledInputContainer>
        <input type="text" />
        <Button type="add"/>
    </StyledInputContainer>
  )
}

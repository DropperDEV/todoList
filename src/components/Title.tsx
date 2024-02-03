import styled from "styled-components";
import Lines from "./Lines";

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  h1 {
    font-family: var(--special);
    font-size: 50px;
  }
`;
export default function Title() {
  return (
    <StyledTitle>
      <Lines type="small"/>
      <h1>PARA-FAZER AGORA</h1>
      <Lines type="small"/>
    </StyledTitle>
  );
}

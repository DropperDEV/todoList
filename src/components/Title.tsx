import styled from "styled-components";

const StyledTitle = styled.div`
  h1 {
    font-family: var(--special);
    font-size: 50px;
  }
`;
export default function Title() {
  return (
    <StyledTitle>
      <h1>PARA-FAZER AGORA</h1>
    </StyledTitle>
  );
}

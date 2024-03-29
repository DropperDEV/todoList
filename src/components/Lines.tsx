import styled from "styled-components";

const StyledSmallLine = styled.hr`
  color: #fff;
  width: 50px;
`;

const StyledMediumLine = styled(StyledSmallLine)`
  width: 300px;
`;

const StyledLargeLine = styled(StyledSmallLine)`
  width: 800px;
`;

interface LinesProps {
  type: string;
}

function Lines({ type }: LinesProps) {
  return (
    <>
      {type === "small" && <StyledSmallLine />}
      {type === "medium" && <StyledMediumLine />}
      {type === "large" && <StyledLargeLine />}
    </>
  );
}

export default Lines;

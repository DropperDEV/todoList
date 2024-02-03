import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import Lines from "./Lines";

const StyledWriteSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export default function WriteNote() {
  return (
    <StyledWriteSection>
      <Lines type="medium" />
      <FaRegEdit size={30} />
      <Lines type="medium" />
    </StyledWriteSection>
  );
}

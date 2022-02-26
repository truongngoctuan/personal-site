import { COLORS } from "@/components/atoms/DivDebug";
import styled, { css } from "styled-components";
import OriginEssay2, { Essay2Props } from "./Essay2";

const sharedStyles = css`
  & {
    .essay {
      &--content {
      }
    }
  }
`;

type compType = React.ComponentType<Essay2Props>;
const Essay2: compType = styled(OriginEssay2)`
  ${sharedStyles}
  & {
  }
`;

export default Essay2;

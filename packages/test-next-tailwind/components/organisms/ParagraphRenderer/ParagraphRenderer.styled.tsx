import { COLORS } from "@/components/atoms/DivDebug";
import styled, { css } from "styled-components";
import OriginParagraphRenderer, {
  ParagraphRendererProps,
} from "./ParagraphRenderer";

const sharedStyles = css`
  & {
    .title {
      margin-top: 8px;
    }
    .essay-plan {
      &--container {
      }
      &--title {
        width: 25%;
        padding: 6px 0;
        padding-left: 16px;
      }
      &--content {
        width: 75%;
        padding: 6px 0;
      }
    }
    .essay {
      &--content {
      }
    }
  }
`;

type compType = React.ComponentType<ParagraphRendererProps>;
const ParagraphRenderer: compType = styled(OriginParagraphRenderer)`
  ${sharedStyles}
  & {
  }
`;

export default ParagraphRenderer;

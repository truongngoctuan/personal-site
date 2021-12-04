import { COLORS } from "@/components/atoms/DivDebug";
import styled from "styled-components";
import OriginParagraphRenderer, {
  ParagraphRendererProps,
} from "./ParagraphRenderer";

type compType = React.ComponentType<ParagraphRendererProps>;
const ParagraphRenderer: compType = styled(OriginParagraphRenderer)`
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

export default ParagraphRenderer;

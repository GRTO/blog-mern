import {
  Title,
  Description,
  Article,
  SubtitleContainer,
  Timestamp,
} from "./postPreviewStyles.js";
import snarkdown from "snarkdown";
import { fromISOtoFormat } from "../../utils/date.js";
import { Category } from "../Category/Category.jsx";
import { Separator } from "../Separator/Separator.jsx";

export const PostPreview = ({
  title,
  description,
  category,
  creationTime,
  id,
}) => (
  <Article testId={`preview-post-${id}`}>
    <Title testId={`preview-post-title-${id}`}>{title}</Title>
    <SubtitleContainer>
      <Timestamp>{fromISOtoFormat(creationTime)}</Timestamp>
      <Separator />
      <Category category={category} />
    </SubtitleContainer>
    <Description
      testId={`preview-post-description-${id}`}
      dangerouslySetInnerHTML={{ __html: snarkdown(description) }}
    />
  </Article>
);

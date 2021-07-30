import {
  DeleteIcon,
  Description,
  Footer,
  PostContainer,
  Timestamp,
  Title,
} from "./postStyles.js";
import { Separator } from "../Separator/Separator.jsx";
import snarkdown from "snarkdown";
import { fromISOtoFormat } from "../../utils/date.js";
import { Category } from "../Category/Category.jsx";
import TrashIcon from "../../assets/images/trash-delete.svg";

export const Post = ({ post, onClick, onDelete, showActions }) => (
  <PostContainer data-testid={`post-${post._id}`}>
    <Title data-testid={`post-title-${post._id}`} onClick={onClick}>
      {post.title}
    </Title>
    <Description
      data-testid={`post-description-${post._id}`}
      dangerouslySetInnerHTML={{ __html: snarkdown(post.description) }}
    />
    <Footer>
      <Timestamp>{fromISOtoFormat(post.creationTime)}</Timestamp>
      <Separator />
      {post.categories.map((category) => (
        <Category key={category} category={category} />
      ))}
      {showActions && (
        <>
          <Separator />
          <DeleteIcon src={TrashIcon} onClick={onDelete} />
        </>
      )}
    </Footer>
  </PostContainer>
);

import { CategoryContainer, CategoryElement } from "./categoryStyles";

export const Category = ({ category }) => (
  <CategoryContainer testId={`category-item-${category}`}>
    <CategoryElement testId={`category-text-${category}`}>
      {category}
    </CategoryElement>
  </CategoryContainer>
);

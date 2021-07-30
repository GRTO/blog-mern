import { render, fireEvent } from "../../../utils/test-util";
import { Post } from "../Post";

describe("Post", () => {
  it("should have render the Post element", () => {
    const post = {
      _id: "customId",
      creationTime: "2021-07-30T07:12:14.879Z",
      title: "Test title",
      description: "Test Description",
      categories: ["Test Category"],
    };
    const rendered = render(<Post post={post} />);

    expect(rendered.getByTestId(`post-${post._id}`)).toBeDefined();
  });

  it("onClick should be called", async () => {
    const post = {
      _id: "customId",
      creationTime: "2021-07-30T07:12:14.879Z",
      title: "Test title",
      description: "Test Description",
      categories: ["Test Category"],
    };

    const mockOnClick = jest.fn();

    const rendered = render(<Post post={post} onClick={mockOnClick} />);

    expect(rendered.getByTestId(`post-${post._id}`)).toBeDefined();

    await fireEvent.click(rendered.getByTestId(`post-title-${post._id}`));

    expect(mockOnClick).toHaveBeenCalled();
  });
});

import TestRenderer from "react-test-renderer";
import PostItem from "./PostItem";

describe("PostItem", () => {
  it("should render the component", () => {
    const component = TestRenderer.create(
      <PostItem name="abc" body="xyz" initials="T" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import * as React from "react";
import TestRenderer from "react-test-renderer";
import Loading from "./Loading";

describe("Loading", () => {
  it("should render the component", () => {
    const component = TestRenderer.create(<Loading isInContainer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

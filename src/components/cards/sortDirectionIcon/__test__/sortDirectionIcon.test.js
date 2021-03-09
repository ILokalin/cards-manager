import { render } from "@testing-library/react";
import { SortDirectionIcon } from "../index";

describe("Cards", () => {
  it("Basic card is rendered", () => {
    const { asFragment } = render(<SortDirectionIcon />);
    const snapshot = asFragment();

    expect(snapshot).toMatchSnapshot();
  });
});

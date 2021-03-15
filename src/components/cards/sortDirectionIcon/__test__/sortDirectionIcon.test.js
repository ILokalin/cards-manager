import { render } from "@testing-library/react";
import { SortDirectionIcon } from "../index";
import { useSortDirection } from "state/ducks/cards";

jest.mock("state/ducks/cards", () => ({
  ...jest.requireActual("state/ducks/cards"),
  useSortDirection: jest.fn().mockReturnValueOnce(true),
}));

describe("Sort direction icon", () => {
  it("should render icon without props", () => {
    const { asFragment } = render(<SortDirectionIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render icon with isKey true and AZ direction", () => {
    const { asFragment } = render(<SortDirectionIcon isKey={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render icon with isKey true and ZA direction", () => {
    useSortDirection.mockResolvedValue(false);
    const { asFragment } = render(<SortDirectionIcon isKey={true} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

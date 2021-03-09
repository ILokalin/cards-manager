import { render } from "@testing-library/react";
import { CardCommon } from "../cardCommon";
import { CardCover } from "../cardCover";
import { CardStudent } from "../cardStudent";

describe("Cards", () => {
  it("Basic card is rendered", () => {
    const { asFragment } = render(<CardCommon />);
    const snapshot = asFragment();
    expect(snapshot).toMatchSnapshot();
  });

  it("CardsCover is rendered", () => {
    const { asFragment } = render(<CardCover />);
    const snapshot = asFragment();
    expect(snapshot).toMatchSnapshot();
  });

  it("CardsStudent is rendered", () => {
    const { asFragment } = render(<CardStudent />);
    const snapshot = asFragment();
    expect(snapshot).toMatchSnapshot();
  });
});

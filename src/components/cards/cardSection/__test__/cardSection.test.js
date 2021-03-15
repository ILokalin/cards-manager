import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state";
import { CardSection } from "../index";

describe("CadSection", () => {
  it("should render without props and have title", () => {
    render(
      <Provider store={store}>
        <CardSection />
      </Provider>
    );

    const textElemnt = screen.getByText(/Карточка/i);
    expect(textElemnt).toBeInTheDocument();
  });
});

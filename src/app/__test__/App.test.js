import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state";
import { App } from "app";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/CardManager/i);
  expect(linkElement).toBeInTheDocument();
});

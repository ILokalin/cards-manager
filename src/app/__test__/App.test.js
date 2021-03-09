import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";
import { App } from "app";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/CardNav/i);
  expect(linkElement).toBeInTheDocument();
});

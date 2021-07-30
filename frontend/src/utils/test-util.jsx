import { render } from "@testing-library/react";
import Theme from "../styles/theme";
import { CategoriesContextProvider } from "../context/categories/Context";

const AllProviders = ({ children }) => (
  <Theme>
    <CategoriesContextProvider>{children}</CategoriesContextProvider>
  </Theme>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };

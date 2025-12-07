import { http, delay, HttpResponse } from "msw";
import { server } from "../mocks/server";
import BrowseProducts from "../../src/pages/BrowseProductsPage";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Theme } from "@radix-ui/themes";

describe("BrowseProductsPage", () => {
  const renderComponent = () => {
    render(<Theme>{<BrowseProducts />}</Theme>);
  };

  it("should show loading skeletons when fetching categories", () => {
    server.use(
      http.get("/categories", async () => {
        await delay(1000);
        return HttpResponse.json([]);
      })
    );

    renderComponent();

    expect(
      screen.getByRole("progressbar", { name: /categories/i })
    ).toBeInTheDocument();
  });

  it("should hide the loading skeleton after categories are fetched", async () => {
    renderComponent();

    await waitForElementToBeRemoved(() =>
      screen.getByRole("progressbar", { name: /categories/i })
    );
  });

  it("should show loading skeletons when fetching products", () => {
    server.use(
      http.get("/products", async () => {
        await delay(1000);
        return HttpResponse.json([]);
      })
    );

    renderComponent();

    expect(
      screen.getByRole("progressbar", { name: /products/i })
    ).toBeInTheDocument();
  });

  it("should hide the loading skeleton after products are fetched", async () => {
    renderComponent();

    await waitForElementToBeRemoved(() =>
      screen.getByRole("progressbar", { name: /products/i })
    );
  });
});

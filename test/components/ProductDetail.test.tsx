import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { products } from "../mocks/data";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/server";

describe("ProductDetail", () => {
  it("should render the list of products", async () => {
    render(<ProductDetail productId={1} />);

    expect(
      await screen.findByText(new RegExp(products[0].name, "i"))
    ).toBeInTheDocument();
    expect(
      await screen.findByText(new RegExp(products[0].price.toString()))
    ).toBeInTheDocument();
  });

  it("should render message when product is not found", async () => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)));

    render(<ProductDetail productId={1} />);

    const message = await screen.findByText(/not found/i);
    expect(message).toBeInTheDocument();
  });

  it("should render an error for invalid product id", async () => {
    render(<ProductDetail productId={0} />);

    const error = await screen.findByText(/invalid productid/i);
    expect(error).toBeInTheDocument();
  });
});

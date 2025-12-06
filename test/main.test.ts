import { db } from "./mocks/db";

describe("group", () => {
  it("should", () => {
    const product = db.product.create({ name: "apple", price: 10 });
    console.log(product);
  });
});

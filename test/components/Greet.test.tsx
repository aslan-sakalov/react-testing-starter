import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should rander Hello with the name, when name is provided", () => {
    render(<Greet name = 'Mosh' />);
  });
});

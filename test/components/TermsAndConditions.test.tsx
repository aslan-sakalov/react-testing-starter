  import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe("TermsAndConditions", () => {
  
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox", {
        name: /i accept the terms and conditions/i,
      }),
      button: screen.getByRole("button", { name: /submit/i }),
    };
  };

  it("should render the terms and conditions heading", () => {
    const { heading } = renderComponent();

    expect(heading).toHaveTextContent(/terms & conditions/i);
  });


  it("should have an unchecked checkbox initially", () => {
    const { checkbox } = renderComponent();

    expect(checkbox).not.toBeChecked();
  });


  it("should have a disabled submit button initially", () => {
    const { button } = renderComponent();

    expect(button).toBeDisabled();
  });


  it("should enable the button when checkbox is checked", async () => {
    const user = userEvent.setup();
    const { checkbox, button } = renderComponent();

    await user.click(checkbox);

    expect(button).toBeEnabled();
    expect(checkbox).toBeChecked();
  });


});

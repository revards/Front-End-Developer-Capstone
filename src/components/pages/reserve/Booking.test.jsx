import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Booking } from "./Booking";

describe("Booking tests", () => {
  test("renders heading", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test("Initial times", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const timeFormat = /^\d{2}:\d{2}$/;
    const times = await screen.findAllByTestId("time-options");
    times.forEach((time) => {
      expect(time.textContent).toMatch(timeFormat);
    });
  });

  test("Times update", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const selectedDate = "2024-12-11";
    const dates = screen.getByTestId("date-options");
    const timeOptions = await screen.findAllByTestId("time-options");

    fireEvent.change(dates, { target: { value: selectedDate } });

    const updatedTimeOptions = await screen.findAllByTestId("time-options");

    expect(dates.value).toBe(selectedDate);
    expect(timeOptions.length).not.toEqual(updatedTimeOptions.length);
    expect(updatedTimeOptions.length).toBeGreaterThan(0);
  });
  test("Input field attributes", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const dateInput = screen.getByTestId("date-options");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("id", "time");
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");

    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });
  test("Form submission with valid data", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const dateInput = screen.getByTestId("date-options");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    fireEvent.change(dateInput, { target: { value: "2024-12-20" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(dateInput.value).toBe("2024-12-20");
    expect(timeSelect.value).toBe("18:00");
    expect(guestsInput.value).toBe("4");
    expect(occasionSelect.value).toBe("Birthday");


    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);
    // expect(window.alert).toHaveBeenCalledWith();
  });

  test("Submit button is disabled with invalid fields", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const dateInput = screen.getByTestId("date-options");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
    fireEvent.change(dateInput, { target: { value: "2024-12-20" } });
    expect(submitButton).toBeDisabled();
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    expect(submitButton).toBeDisabled();
    fireEvent.change(guestsInput, { target: { value: "3" } });
    expect(submitButton).toBeDisabled();
    expect(occasionSelect.value).toBe("");
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    // Button should now be enabled
    expect(submitButton).not.toBeDisabled();
  });
});

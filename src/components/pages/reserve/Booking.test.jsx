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
});

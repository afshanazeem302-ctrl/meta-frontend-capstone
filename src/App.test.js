import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";

test("Renders the BookingForm heading/label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns non-empty array of time slots", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns updated times state on UPDATE_TIMES action", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", payload: "2026-09-20" };
  const newState = updateTimes(state, action);
  expect(Array.isArray(newState)).toBe(true);
});
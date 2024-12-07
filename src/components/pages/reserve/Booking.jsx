import React, { useReducer} from 'react'
import BookingForm from './BookingForm'

const updateTimes = (availableTimes, date) => {
  switch (date.type) {
    case "UPDATE_DATE":
        const selectedDate = date.payload;

        return availableTimes;

    default:
        return availableTimes;
}
}
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}
export const Booking = () => {
  const [availableTimes, dispatchAvailableTimesChange] = useReducer(updateTimes, [], initializeTimes);
  return (
    <>
    <section className='booking'>
    <header>Table Reservation</header>
    <BookingForm availableTimes={availableTimes} dispatchAvailableTimesChange={dispatchAvailableTimesChange}/>
    </section>
    </>
  )
}

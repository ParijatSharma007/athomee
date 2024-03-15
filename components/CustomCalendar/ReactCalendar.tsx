"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ReactCalendar() {
  const [value, onChange] = useState<any>(new Date());
  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

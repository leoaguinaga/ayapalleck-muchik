"use client";

import React, { useState } from "react";
import BookingCalendar from "./components/BookingCalendar";
import BookingNavbar from "./components/BookingNavbar/BookingNavbar";

export default function BookingPage() {
  const [weekOffset, setWeekOffset] = useState(0);

  const handlePrevWeek = () => {
    // if (weekOffset > 0) {
    // }
    setWeekOffset((prev) => prev - 1);
  };

  const handleNextWeek = () => {
    setWeekOffset((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <BookingNavbar
        weekOffset={weekOffset}
        onPrevWeek={handlePrevWeek}
        onNextWeek={handleNextWeek}
      />
      <BookingCalendar weekOffset={weekOffset} />
    </div>
  );
}

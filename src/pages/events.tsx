import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import EventItem from "@/components/Event/EventItem";
const localizer = momentLocalizer(moment);

type Event = {
  allDay?: boolean | undefined;
  title?: React.ReactNode | undefined;
  start?: Date | undefined;
  end?: Date | undefined;
  resource?: any;
};
const ColoredDateCellWrapper = ({ children }: any) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

export default function Events() {
  const [dates, setDates] = useState();
  const events = [
    {
      allDay: false,
      id: 1,
      title: "we outside",
      start: new Date(2024, 6, 17, 8, 30), // Specific start time
      end: new Date(2024, 6, 17, 12, 30), // Specific end time
    },
    {
      allDay: false,
      id: 1,
      title: "we outside",
      start: new Date(2024, 6, 17, 12, 45), // Specific start time
      end: new Date(2024, 6, 17, 14, 30), // Specific end time
    },
    {
      allDay: true,
      id: 2,
      title: "DTS STARTS",
      start: new Date(2024, 6, 22), // Month is 0-based
      end: new Date(2024, 6, 27), // Month is 0-based
    },
  ];

  const handleSundayDate = () => {
    const currentDate = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + i
      );
      const day = date.toLocaleDateString("en-US", { weekday: "short" });

      dates.push({ day, date });
    }

    const sundayEvents = dates
      .filter((item) => item.day === "Sun")
      .flatMap((item, index) => [
        {
          allDay: false,
          id: Math.random() * 100,
          title: `Sunday Service 1`,
          start: new Date(
            item.date.getFullYear(),
            item.date.getMonth(),
            item.date.getDate(),
            9,
            15
          ),
          end: new Date(
            item.date.getFullYear(),
            item.date.getMonth(),
            item.date.getDate(),
            11,
            45
          ),
        },
        {
          allDay: false,
          id: Math.random() * 100,
          title: `Sunday Service 2`,
          start: new Date(
            item.date.getFullYear(),
            item.date.getMonth(),
            item.date.getDate(),
            11,
            45
          ),
          end: new Date(
            item.date.getFullYear(),
            item.date.getMonth(),
            item.date.getDate(),
            13,
            15
          ),
        },
      ]);

    return sundayEvents;
  };

  useEffect(() => {
    console.log(handleSundayDate());
  }, []);

  const eventPropGetter = (
    event: any,
    start: any,
    end: any,
    isSelected: any
  ) => {
    const backgroundColor = "#8665c5";
    const style = {
      backgroundColor,
      borderRadius: "8px",
      fontWeight: 600,
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };
  return (
    <div className="">
      <Header />
      <div className="w-full flex  justify-center">
        <div className="w-[80%] p-5">
          <div className="flex gap-3">
            <div className="w-[70%]">
              <Calendar
                components={{ timeSlotWrapper: ColoredDateCellWrapper }}
                localizer={localizer}
                events={handleSundayDate()}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={["month", "week", "day"]}
                step={60}
                showMultiDayTimes
                eventPropGetter={eventPropGetter}
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <div className=" w-full flex gap-1 flex-col items-center  px-3 py-1 ">
                <p className="text-xl text-center "> Upcoming Event Details</p>
                <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              {handleSundayDate().map((item, index) => (
                <EventItem event={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

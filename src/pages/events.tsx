import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import EventItem from "@/components/Event/EventItem";
const localizer = momentLocalizer(moment);
import { useQuery, gql } from "@apollo/client";
import { INextEvent } from "@/models/utils.model";

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
const GET_DATA = gql`
  {
    nextEvents {
      eventName
      eventImage {
        url
      }
      liveVideoUrl
      eventDateStartTime
      eventDateEndTime
    }
  }
`;
export default function Events() {
  const [dates, setDates] = useState();
  const { loading, error, data } = useQuery(GET_DATA);
  const [nextEvents, setnextEvents] = useState<any[]>([]);
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
          slug: "",
          fullDate: "",
          img: "",
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
          slug: "",
          fullDate: "",
          img: "",
        },
      ]);

    return sundayEvents;
  };

  useEffect(() => {
    if (data) {
      const eventstransformed = data.nextEvents.map(
        (item: INextEvent, index: number) => {
          const date = new Date(item.eventDateStartTime);
          const end = new Date(item.eventDateEndTime);
          return {
            allDay: false,
            id: Math.random() * 100,
            title: item.eventName,
            start: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              date.getHours(),
              date.getMinutes()
            ),
            end: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              end.getHours(),
              end.getMinutes()
            ),
            slug: item.liveVideoUrl,
            fullDate: item.eventDateStartTime,
            img: item.eventImage.url,
          };
        }
      );
      setnextEvents(eventstransformed);
      console.log(eventstransformed, "efvdtdr");
    }
  }, [data]);

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
      <div className="w-full flex  justify-center mt-[120px]">
        <div className="w-[80%] p-5">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="lg:w-[70%] w-full">
              <Calendar
                components={{ timeSlotWrapper: ColoredDateCellWrapper }}
                localizer={localizer}
                events={nextEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={["month", "week", "day"]}
                step={60}
                showMultiDayTimes
                eventPropGetter={eventPropGetter}
              />
            </div>
            <div className="lg:w-[30%] w-full flex flex-col gap-2">
              <div className=" w-full flex gap-1 flex-col items-center  px-3 py-1 ">
                <p className="text-xl text-center "> Upcoming Event Details</p>
                <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <div className="lg:h-[70vh] w-full flex  flex-col gap-2 overflow-scroll">
                {nextEvents.map((item, index) => (
                  <EventItem event={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

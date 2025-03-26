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
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { getFormattedDate } from "@/components/utils/GlobalPagination";
import { useRouter } from "next/router";

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
      backgroundColor: "#8665c5",
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
  const [selectedEvent, setSelectedEvent] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          fullDate: item.date,
          img: "https://www.rccgbradford.org.uk/wp-content/uploads/2019/11/rccgbradford-sunday-600x600.jpeg",
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
          fullDate: item.date,
          img: "https://www.rccgbradford.org.uk/wp-content/uploads/2019/11/rccgbradford-sunday-600x600.jpeg",
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
      setnextEvents(eventstransformed.concat(handleSundayDate()));
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
                onSelectEvent={(event, e) => {
                  setSelectedEvent(event);
                  onOpen();
                }}
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
      <EventPopup event={selectedEvent} isOpen={isOpen} onClose={onClose} />
      <Footer />
    </div>
  );
}
const EventPopup = ({ event, isOpen, onClose }: any) => {
  const router = useRouter();
  function formatTime(dateString: string) {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Extract hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format the hours and minutes to ensure two digits for minutes
    const formattedHours = hours.toString();
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // Return the formatted time with AM/PM
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div
            className="p-2 w-full grow flex flex-col cursor-pointer gap-2 rounded-t-lg h-fit shadow-md"
            onClick={() =>
              router.push({
                pathname: "/live_stream",
                // query: {
                //   eventname: event?.title,
                //   time: event?.fullDate as string,
                //   url: event?.slug,
                // },
              })
            }
          >
            <div className="w-full overflow-hidden rounded-t-lg h-[100px] ">
              <img src={event?.img} alt="img" height={300} className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">
                Event Name:{" "}
                <span className="font-semibold text-primary">
                  {event?.title}
                </span>
              </p>
              <p className="text-sm">
                Date:{" "}
                <span className="font-semibold text-primary">
                  {getFormattedDate(event?.fullDate)}
                </span>
              </p>
              <p className="text-sm">
                Time:{" "}
                <span className="font-semibold text-primary">
                  {formatTime(event?.start as string)}-
                  {formatTime(event?.end as string)}
                </span>
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="w-fit h-fit px-5 py-2 rounded-lg bg-[#fafafa] text-[#ccc]">
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

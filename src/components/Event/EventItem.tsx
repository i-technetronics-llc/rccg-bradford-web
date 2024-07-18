import Image from "next/image";

type EventItem = {
  allDay: boolean;
  id: number;
  title: string;
  start: Date | string;
  end: Date | string;
};
type EventProp = {
  event: EventItem;
};

export default function EventItem({ event }: EventProp) {
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
    <div className="w-full p-2 flex flex-col gap-2 rounded-t-lg h-fit shadow-md">
      <div className="w-full overflow-hidden rounded-t-lg h-[100px] ">
        <Image
          src="https://www.rccgbradford.org.uk/wp-content/uploads/2019/11/rccgbradford-sunday-600x600.jpeg"
          alt="img"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Event Name:{" "}
          <span className="font-semibold text-primary">{event.title}</span>
        </p>
        <p className="text-sm">
          Time:{" "}
          <span className="font-semibold text-primary">
            {formatTime(event.start as string)}-
            {formatTime(event.end as string)}
          </span>
        </p>
      </div>
    </div>
  );
}

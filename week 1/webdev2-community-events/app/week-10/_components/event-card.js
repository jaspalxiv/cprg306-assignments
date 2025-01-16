import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <Link href={`/week-10/${event.id}`}>
      <div className="cursor-pointer border border-blue-500 bg-blue-800 m-1 p-2">
        <h3 className="text-xl font-bold">{event.name}</h3>
        <p>Date: {event.date.toDateString()}</p>
        <p>Location: {event.location}</p>
      </div>
    </Link>
  );
}

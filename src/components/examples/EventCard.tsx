import EventCard from "../EventCard";

export default function EventCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <EventCard
        id="1"
        title="Beat Making Workshop"
        date="Dec 15, 2025 • 6:00 PM"
        location="VIT Campus, Main Auditorium"
        category="Workshop"
        attendees={45}
        status="upcoming"
        onRegister={() => console.log("Register clicked")}
      />
    </div>
  );
}

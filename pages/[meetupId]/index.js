import { Fragment } from "react";
import MeetupItem from "../../components/meetups/MeetupItem";

function MeetupDetails() {
  return (
    <MeetupItem
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;

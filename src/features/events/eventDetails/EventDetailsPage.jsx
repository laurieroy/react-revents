import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventsDetailsChat from "./EventDetailsChat";
import EventsDetailsHeader from "./EventDetailsHeader";
import EventsDetailsInfo from "./EventDetailsInfo";
import EventsDetailsSidebar from "./EventDetailsSidebar";

export default function EventDetailsPage({ match }) {
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsDetailsHeader event={event} />
        <EventsDetailsChat />
        <EventsDetailsInfo event={event} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventsDetailsSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
}

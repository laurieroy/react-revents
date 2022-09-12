import { Grid } from "semantic-ui-react";
import EventsDetailsChat from "./EventDetailsChat";
import EventsDetailsHeader from "./EventDetailsHeader";
import EventsDetailsInfo from "./EventDetailsInfo";
import EventsDetailsSidebar from "./EventDetailsSidebar";

export default function EventDetailsPage() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsDetailsHeader />
        <EventsDetailsChat />
        <EventsDetailsInfo />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventsDetailsSidebar />
      </Grid.Column>
    </Grid>
  );
}

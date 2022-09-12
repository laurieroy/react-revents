import { Route } from "react-router-dom";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";
import { Container } from "semantic-ui-react";
import EventDetails from "../../features/events/eventDetails/EventDetailsPage";
import HomePage from "../../features/home/HomePage";
import EventForm from "../../features/events/eventForm/EventForm";

export default function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetails} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

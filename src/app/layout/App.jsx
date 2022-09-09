import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";
import { Container } from "semantic-ui-react";

export default function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

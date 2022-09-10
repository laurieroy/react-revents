import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form>
        <FormField>
          <input type="text" placeholder="Event title" />
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Venue" />
          <input type="text" placeholder="Date" />
          <Button type="submit" floated="right" postiive content="submit" />
          <Button
            onClick={() => setFormOpen(false)}
            type="submit"
            floated="right"
            content="cancel"
          />
        </FormField>
      </Form>
    </Segment>
  );
}

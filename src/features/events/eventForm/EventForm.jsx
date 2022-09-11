import { useState } from "react";

import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen, setEvents, createEvent}) {
  const initialValues = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    createEvent(values);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...initialValues, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            name="title"
            type="text"
            placeholder="Event title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Category"
            name="title"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Description"
            name="title"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="City"
            name="title"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Venue"
            name="title"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Date"
            name="title"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
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

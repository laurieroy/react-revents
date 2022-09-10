import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
	return (
		<Segment clearing>
			<Header content="Create new event" />
				<Form>
					<FormField>
						<input type="text" name="" id="" placeholder="Event title" />
						<input type="text" name="" id="" placeholder="Category" />
						<input type="text" name="" id="" placeholder="Description" />
						<input type="text" name="" id="" placeholder="City" />
						<input type="text" name="" id="" placeholder="Venue" />
						<input type="text" name="" id="" placeholder="Date" />
						<Button type="submit" floated="right" postiive content="submit" />
						<Button type="submit" floated="right" content="cancel" />
					</FormField>
				</Form>
		</Segment>
	)
}
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
          Re-vents
        </MenuItem>
        <MenuItem name="Events" />
				<MenuItem>
					<Button positive inverted content="Create Event"></Button>
				</MenuItem>
        <MenuItem position="right">
					<Button basic inverted content="Login" />
					<Button basic inverted content="Register" style={{marginLeft: "0.5em"}} />
				</MenuItem>
      </Container>
    </Menu>
  );
}

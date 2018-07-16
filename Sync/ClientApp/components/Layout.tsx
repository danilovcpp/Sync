import * as React from 'react';
import { Grid, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Layout extends React.Component<{}, {}> {
	public render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect staticTop>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer exact to={`/`}><a>Sync</a></LinkContainer>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#">Link</NavItem>
							<NavItem eventKey={2} href="#">Link</NavItem>
							<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Action</MenuItem>
								<MenuItem eventKey={3.2}>Another action</MenuItem>
								<MenuItem eventKey={3.3}>Something else here</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={3.3}>Separated link</MenuItem>
							</NavDropdown>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} href="/profile">Profile</NavItem>
							<LinkContainer exact to={`/settings`}>
								<NavItem eventKey={2} href="#">Settings</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Grid>
					<Row>
						<Col md={3}>
							<Panel>
								<Panel.Heading>Current context</Panel.Heading>
								<ListGroup fill>
									<LinkContainer exact to={`/tables/details`}>
										<ListGroupItem>Details</ListGroupItem>
									</LinkContainer>
									<LinkContainer exact to={`/tables/component_groups`}>
										<ListGroupItem>Component groups</ListGroupItem>
									</LinkContainer>
									<LinkContainer exact to={`/tables/drawing`}>
										<ListGroupItem>Drawing</ListGroupItem>
									</LinkContainer>
									<LinkContainer exact to={`/tables/component`}>
										<ListGroupItem>Component</ListGroupItem>
									</LinkContainer>
								</ListGroup>
							</Panel>
						</Col>
						<Col md={9}>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

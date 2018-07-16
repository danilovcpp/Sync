import * as React from 'react';
import { Modal, Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Glyphicon, InputGroup } from 'react-bootstrap';

interface SyncModalProps {
	showModal: boolean;
	onHide: () => void;
}

export class SyncModal extends React.Component<SyncModalProps, {}> {
	public render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>Choose sync root</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
							<Col sm={2}>
								<ControlLabel>Sync root</ControlLabel>
							</Col>
							<Col sm={10}>
								<InputGroup>
									<FormControl type="text" placeholder="http://rdev.redoc.ru" />
									<InputGroup.Button>
										<Button bsStyle="primary"><Glyphicon glyph="refresh" /></Button>
									</InputGroup.Button>
								</InputGroup>
							</Col>
						</FormGroup>
						<h4>Sync options</h4>
						<FormGroup controlId="formHorizontalPassword">
							<Col sm={2}>
								<ControlLabel>Table</ControlLabel>
							</Col>
							<Col sm={10}>
								<FormControl componentClass="select" placeholder="Choose table..">
									<option value="details">details</option>
									<option value="component_group">component_group</option>
									<option value="drawing">drawing</option>
									<option value="component">component</option>
								</FormControl>
							</Col>
						</FormGroup>
						<FormGroup controlId="syncType">
							<Col sm={2}>
								<ControlLabel>Sync type</ControlLabel>
							</Col>
							<Col sm={10}>
								<FormControl componentClass="select" placeholder="Choose sync type..">
									<option value="shallow">shallow</option>
									<option value="deep">deep</option>
								</FormControl>
							</Col>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}><Glyphicon glyph="ban-circle" /> Close</Button>
					<Button bsStyle="success"><Glyphicon glyph="floppy-disk" /> Save root</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

import * as React from 'react';
import { Modal, Button, Table, Glyphicon, Alert, Pager, Grid, Col, Row, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

interface ResolveModalProps {
	showModal: boolean;
	onHide: () => void;
}

export class ResolveModal extends React.Component<ResolveModalProps, {}> {
	public render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onHide} bsSize="lg">
				<Modal.Header closeButton>
					<Modal.Title>Conflicts log</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Alert bsStyle="danger">You have <strong>5</strong> unresolved conflicts. Resolve conflicts before you can push.</Alert>
					<Row>
						<Col md={6}>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>Current change</ControlLabel>
								<FormControl componentClass="textarea" rows={15} defaultValue={`{"name": "john doe"}`} />
							</FormGroup>
							<Button block>Take this</Button>
						</Col>
						<Col md={6}>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>Master change</ControlLabel>
								<FormControl componentClass="textarea" rows={15} defaultValue={`{"name": "john smith"}`} />
							</FormGroup>
							<Button block>Take this</Button>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}><Glyphicon glyph="ban-circle" /> Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

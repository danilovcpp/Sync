import * as React from 'react';
import { Modal, Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, Glyphicon, InputGroup, Alert, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

interface SyncModalProps {
	showModal: boolean;
	onHide: () => void;
}

interface SyncModalState {
	host: string;
	step: number;
}

export class SyncModal extends React.Component<SyncModalProps, SyncModalState> {
	constructor() {
		super();
		this.state = {
			host: "",
			step: 0
		}
	}

	private handleChange = (e: any) => {
		this.setState({ host: e.target.value });
	}

	private handleClick = () => {

		if (this.state.host === "http://rdev.redoc.ru")
			this.setState({ step: 3 });
		else if (this.state.host === "http://rdev1.redoc.ru")
			this.setState({ step: 2 });
		else
			this.setState({ step: 1 });
	}

	public render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>Choose sync node</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
							<Col sm={2}>
								<ControlLabel>Node</ControlLabel>
							</Col>
							<Col sm={10}>
								<InputGroup>
									<FormControl type="text" onChange={this.handleChange} value={this.state.host} placeholder="http://rdev.redoc.ru" />
									<InputGroup.Button>
										<Button bsStyle="primary" onClick={this.handleClick}><Glyphicon glyph="refresh" /></Button>
									</InputGroup.Button>
								</InputGroup>
							</Col>
						</FormGroup>

						{this.state.step == 1 &&
							<Alert bsStyle="danger">
								<h4>Error!</h4>
								<p>This host have no synchronization points.</p>
							</Alert>
						}
						{this.state.step == 2 &&
							<Alert bsStyle="warning">
								<h4>Warning!</h4>
								<p>This host have synchronization point, but have diffrent schema or version</p>
								<p>Name: <strong>Redoc</strong></p>
								<p>Version: <strong>v2018.07.17</strong></p>
								<br />
								<ButtonToolbar>
									<DropdownButton
										bsStyle="warning"
										title={<span><Glyphicon glyph="download-alt" /> Clone or download</span>}
										id={`dropdown-basic-1`}
									>
										<MenuItem eventKey="1"><Glyphicon glyph="download-alt" /> Clone all tables</MenuItem>
										<MenuItem eventKey="2" onClick={() => { this.setState({ step: 4 }) }}><Glyphicon glyph="download-alt" /> Clone only choosen tables</MenuItem>
									</DropdownButton>
								</ButtonToolbar>
							</Alert>
						}
						{this.state.step == 3 &&
							<Alert bsStyle="success">
								<h4>Congratulations!</h4>
								<p>This host can be used to syncronization.</p>
								<p>Name: <strong>Redoc</strong></p>
								<p>Version: <strong>v2018.07.17</strong></p>
								<br />
								<ButtonToolbar>
									<DropdownButton
										bsStyle="success"
										title={<span><Glyphicon glyph="download-alt" /> Clone or download</span>}
										id={`dropdown-basic-1`}
									>
										<MenuItem eventKey="1"><Glyphicon glyph="download-alt" /> Clone all tables</MenuItem>
										<MenuItem eventKey="2" onClick={() => { this.setState({ step: 4 }) }}><Glyphicon glyph="download-alt" /> Clone only choosen tables</MenuItem>
									</DropdownButton>
								</ButtonToolbar>
							</Alert>
						}
						{this.state.step === 4 &&
							<div>
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
								<FormGroup controlId="syncAccess">
									<Col sm={2}>
										<ControlLabel>Access</ControlLabel>
									</Col>
									<Col sm={10}>
										<FormControl componentClass="select" placeholder="Choose access..">
											<option value="read">read-only</option>
											<option value="write">write-only</option>
											<option value="full">full</option>
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
											<option value="cascade">cascade</option>
										</FormControl>
									</Col>
								</FormGroup>
								<FormGroup controlId="syncMerge">
									<Col sm={2}>
										<ControlLabel>Merge</ControlLabel>
									</Col>
									<Col sm={10}>
										<FormControl componentClass="select" placeholder="Choose merge..">
											<option value="auto">Auto when possible</option>
											<option value="master">Always prefer master</option>
											<option value="this">Always prefer this</option>
											<option value="manual">Always manual</option>
										</FormControl>
									</Col>
								</FormGroup>
								<FormGroup controlId="syncPeriod">
									<Col sm={2}>
										<ControlLabel>Period</ControlLabel>
									</Col>
									<Col sm={10}>
										<FormControl componentClass="select" placeholder="Choose period..">
											<option value="1">1 min</option>
											<option value="2">2 min</option>
											<option value="5">5 min</option>
											<option value="10">10 min</option>
											<option value="15">15 min</option>
											<option value="30">30 min</option>
											<option value="60">60 min</option>
										</FormControl>
									</Col>
								</FormGroup>
							</div>
						}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}><Glyphicon glyph="ban-circle" /> Close</Button>
					<Button bsStyle="success"><Glyphicon glyph="floppy-disk" /> Save node</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

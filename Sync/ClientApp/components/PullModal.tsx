import * as React from 'react';
import { Modal, Button, Table, Pager, Glyphicon } from 'react-bootstrap';

interface PullModalProps {
	showModal: boolean;
	onHide: () => void;
}

export class PullModal extends React.Component<PullModalProps, {}> {
	public render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onHide} bsSize="lg">
				<Modal.Header closeButton>
					<Modal.Title>Pull log</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table responsive>
						<thead>
							<tr>
								<th>action</th>
								<th>table</th>
								<th>recid</th>
								<th>diff</th>
							</tr>
						</thead>
						<tbody>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
								<td>{`{"name": "john doe"}`}</td>
							</tr>
							<tr className="warning">
								<td>update</td>
								<td>People</td>
								<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
								<td>{`{"name": "john doe1234566"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="danger">
								<td>delete</td>
								<td>People</td>
								<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
								<td>{`{"name": "john doe"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
							<tr className="success">
								<td>add</td>
								<td>People</td>
								<td>d093f9cc-c7ad-4b57-bffc-b33b3f88ec56</td>
								<td>{`{"name": "john smith"}`}</td>
							</tr>
						</tbody>
					</Table>
					<Pager>
						<Pager.Item previous disabled href="#">&larr; Previous</Pager.Item>
						<Pager.Item next href="#">Next &rarr; </Pager.Item>
					</Pager>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}><Glyphicon glyph="ban-circle" /> Close</Button>
					<Button bsStyle="success"><Glyphicon glyph="save" /> Apply changes</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

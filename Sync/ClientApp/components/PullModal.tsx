import * as React from 'react';
import { Modal, Button, Table, Pager, Glyphicon, Alert } from 'react-bootstrap';
import { HistoryRecord } from '../models/HistoryRecord';
import { SyncNode } from '../models/SyncNode';

interface PullModalProps {
	showModal: boolean;
	onHide: () => void;
	historyRecords: HistoryRecord[];
	node?: SyncNode;
	onApply: (node: SyncNode) => void;
	lastCommit: string;
}

interface PullModalState {
	data: any[];
}

export class PullModal extends React.Component<PullModalProps, PullModalState> {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.handleFetch(this.props.node!);
	}

	private handleShow = () => {
		this.handleFetch(this.props.node!);
	}

	private handleFetch = (node: SyncNode) => {

		console.log(node);

		fetch(`http://localhost:65168/sync/component/${this.props.lastCommit}`)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({ data: data });
			});
	}


	public render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onHide} bsSize="lg" onShow={this.handleShow}>
				<Modal.Header closeButton>
					<Modal.Title>Pull log</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Alert bsStyle="warning">You have <strong>10</strong> changes behind master. Do you really want to <strong>pull</strong> changes?</Alert>
					<Table hover striped bordered condensed>
						<thead>
							<tr>
								<th>action</th>
								<th>table</th>
								<th>recid</th>
								<th>diff</th>
							</tr>
						</thead>
						<tbody>
							{this.state.data.map(history => <tr className="success">
								<td>add</td>
								<td>component</td>
								<td>{history.recid}</td>
								<td>{history.diff}</td>
							</tr>)}
							{/*
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
							</tr>*/}
						</tbody>
					</Table>
					<Pager>
						<Pager.Item previous disabled href="#">&larr; Previous</Pager.Item>
						<Pager.Item next href="#">Next &rarr; </Pager.Item>
					</Pager>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}><Glyphicon glyph="ban-circle" /> Close</Button>
					<Button bsStyle="success" onClick={() => { this.props.onApply(this.props.node!); this.props.onHide(); }}><Glyphicon glyph="save" /> Pull & Apply changes</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

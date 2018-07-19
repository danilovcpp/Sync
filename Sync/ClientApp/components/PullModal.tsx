import * as React from 'react';
import { Modal, Button, Table, Pager, Glyphicon, Alert } from 'react-bootstrap';
import { HistoryRecord } from '../models/HistoryRecord';
import { SyncNode } from '../models/SyncNode';

interface PullModalProps {
	showModal: boolean;
	onHide: () => void;
	//historyRecords: HistoryRecord[];
	node?: SyncNode;
	onApply: (node: SyncNode) => void;
	//lastCommit: string;
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

		console.log("pullModal: node", node);

		fetch(`http://localhost:65168/sync/component/${this.props.node!.lastUpdate!}`)
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
							{this.state.data.map(record => <tr className="success">
								<td>add</td>
								<td>component</td>
								<td>{record.recid}</td>
								<td>{JSON.stringify(record)}</td>
							</tr>)}
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

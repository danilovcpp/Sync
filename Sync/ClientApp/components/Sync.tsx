import * as React from 'react';
import { Checkbox, Button, Glyphicon, ButtonToolbar, Table, ButtonGroup, Label, Alert } from 'react-bootstrap';
import { SyncModal } from './SyncModal';
import { PullModal } from './PullModal';
import { PushModal } from './PushModal';
import { ResolveModal } from './ResolveModal';
import { SyncNode } from '../models/SyncNode';

interface SyncState {
	isMaster: boolean;
	showSyncModal: boolean;
	showPullModal: boolean;
	showPushModal: boolean;
	showResolveModal: boolean;

	nodes: SyncNode[];
	lastCommit: string;
}

export class Sync extends React.Component<{}, SyncState> {
	constructor() {
		super();
		this.state = {
			isMaster: false,
			showSyncModal: false,
			showPullModal: false,
			showPushModal: false,
			showResolveModal: false,
			nodes: [],
			lastCommit: ""
		}
	}

	private handleMasterChange = (event: any) => {
		this.setState({ isMaster: !this.state.isMaster });
	}

	private handleAddNode = (node: SyncNode) => {
		var nodes = this.state.nodes;
		nodes.push(node);
		this.setState({ nodes: nodes });
	}

	private handleFetch = (node: SyncNode) => {
		var url = node.commit == null ? `${node.host}/sync/component` : `${node.host}/sync/component/${node.commit}`;
		fetch(url)
			.then(data => data.json())
			.then(data => {
				console.log(data);

				var last = node.commit;

				node.pullCount = data.length;
				node.commit = data[data.length - 1].recid;
				node.historyRecords = data;
				this.setState({ nodes: [node], lastCommit: last! });
			});
	}

	private handlePull = (node: SyncNode) => {
		fetch(`sync/component/push`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(node.historyRecords)
		})
			.then(data => {
				console.log(data);
				//node.commit = node.historyRecords![node.historyRecords!.length - 1].recid;
				node.pullCount = undefined;
				this.setState({ nodes: [node] });
			});
	}

	public render() {
		return (
			<div>
				<h3>Sync settings</h3>
				<Checkbox checked={this.state.isMaster} onChange={this.handleMasterChange}>Work as a master server</Checkbox>
				<div hidden={this.state.isMaster}>
					<h3>Sync nodes</h3>
					<ButtonToolbar>
						<Button bsStyle="primary" bsSize="sm" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="plus" /> Add sync node</Button>
					</ButtonToolbar>
					<Table striped hover responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Master host</th>
								<th>Table</th>
								<th>Type</th>
								<th>Merge</th>
								<th>Period</th>
								<th>Sync actions</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{this.state.nodes.map(node => <tr>
								<td>1</td>
								<td><a href="rdev.redoc.ru">{node.host}</a></td>
								<td>{node.table}</td>
								<td>shallow</td>
								<td>master</td>
								<td>10 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.handleFetch(node)}><Glyphicon glyph="refresh" /> fetch</Button>
										{node.pullCount &&
											<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+{node.pullCount}</Label></Button>
										}
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>)}


							{/*
							<tr>
								<td>1</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>details</td>
								<td>shallow</td>
								<td>master</td>
								<td>10 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>component_group</td>
								<td>shallow</td>
								<td>this</td>
								<td>20 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showResolveModal: true }) }}><Glyphicon glyph="warning-sign" /> resolve conflicts <Label bsStyle="danger">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>drawing</td>
								<td>deep</td>
								<td>auto</td>
								<td>5 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPushModal: true }) }}><Glyphicon glyph="arrow-up" /> push <Label bsStyle="warning">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>component</td>
								<td>cascade</td>
								<td>manual</td>
								<td>2 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>drawing</td>
								<td>deep</td>
								<td>auto</td>
								<td>5 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>6</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>component_group</td>
								<td>shallow</td>
								<td>this</td>
								<td>20 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showResolveModal: true }) }}><Glyphicon glyph="warning-sign" /> resolve conflicts <Label bsStyle="danger">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>7</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>details</td>
								<td>shallow</td>
								<td>master</td>
								<td>10 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>8</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>drawing</td>
								<td>deep</td>
								<td>auto</td>
								<td>5 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPushModal: true }) }}><Glyphicon glyph="arrow-up" /> push <Label bsStyle="warning">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>9</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>details</td>
								<td>shallow</td>
								<td>master</td>
								<td>10 min</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>*/}
						</tbody>
					</Table>
				</div>
				<SyncModal showModal={this.state.showSyncModal} onHide={() => this.setState({ showSyncModal: false })} onAdd={this.handleAddNode} />
				<PullModal showModal={this.state.showPullModal} onHide={() => this.setState({ showPullModal: false })} historyRecords={[]} onApply={this.handlePull} node={this.state.nodes[0]} lastCommit={this.state.lastCommit} />
				<PushModal showModal={this.state.showPushModal} onHide={() => this.setState({ showPushModal: false })} />
				<ResolveModal showModal={this.state.showResolveModal} onHide={() => this.setState({ showResolveModal: false })} />
			</div>
		)
	}
}

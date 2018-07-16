import * as React from 'react';
import { Checkbox, Button, Glyphicon, ButtonToolbar, Table, ButtonGroup, Label } from 'react-bootstrap';
import { SyncModal } from './SyncModal';
import { PullModal } from './PullModal';

interface SyncState {
	isMaster: boolean;
	showSyncModal: boolean;
	showPullModal: boolean;
}


export class Sync extends React.Component<{}, SyncState> {
	constructor() {
		super();
		this.state = {
			isMaster: false,
			showSyncModal: false,
			showPullModal: false
		}
	}

	private handleMasterChange = (event: any) => {
		this.setState({ isMaster: !this.state.isMaster });
	}

	public render() {
		return (
			<div>
				<h3>Sync settings</h3>
				<Checkbox checked={this.state.isMaster} onChange={this.handleMasterChange}>Work as a master server</Checkbox>
				<div hidden={this.state.isMaster}>
					<h3>Sync roots</h3>
					<ButtonToolbar>
						<Button bsStyle="primary" bsSize="sm" onClick={() => this.setState({ showSyncModal: true })}><Glyphicon glyph="plus" /> Add sync root</Button>
					</ButtonToolbar>
					<Table striped hover responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Url</th>
								<th>Table</th>
								<th>Sync type</th>
								<th>Sync actions</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>details</td>
								<td>Shallow</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
										<Button bsSize="xs"><Glyphicon glyph="arrow-up" /> push <Label bsStyle="success">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>component_group</td>
								<td>Shallow</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
										<Button bsSize="xs"><Glyphicon glyph="arrow-up" /> push <Label bsStyle="success">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>drawing</td>
								<td>Deep</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
										<Button bsSize="xs"><Glyphicon glyph="arrow-up" /> push <Label bsStyle="success">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td><a href="rdev.redoc.ru">http://rdev.redoc.ru</a></td>
								<td>component</td>
								<td>Shallow</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="refresh" /> fetch</Button>
										<Button bsSize="xs" onClick={() => { this.setState({ showPullModal: true }) }}><Glyphicon glyph="arrow-down" /> pull <Label bsStyle="success">+2</Label></Button>
										<Button bsSize="xs"><Glyphicon glyph="arrow-up" /> push <Label bsStyle="success">+4</Label></Button>
									</ButtonGroup>
								</td>
								<td>
									<ButtonGroup>
										<Button bsSize="xs"><Glyphicon glyph="cog" /> edit</Button>
										<Button bsSize="xs"><Glyphicon glyph="remove" /> remove</Button>
									</ButtonGroup>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<SyncModal showModal={this.state.showSyncModal} onHide={() => this.setState({ showSyncModal: false })} />
				<PullModal showModal={this.state.showPullModal} onHide={() => this.setState({ showPullModal: false })} />
			</div>
		)
	}
}

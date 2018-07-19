import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ButtonToolbar, Button, Glyphicon, Table, FormControl } from 'react-bootstrap';

interface TableViewProps {
	tableName: string;
}

export default class TableView extends React.Component<RouteComponentProps<TableViewProps>, {}> {

	private runCode() {
		return "alert(\"hello world!\"); var e = document.getElementById(\"test-input\"); e.value = \"filled from code\";";
	}

	private hideInput() {
		return "var el = document.getElementById(\"test-input\"); el.remove();";
	}

	public render() {
		return (
			<div>
				<h3>{this.props.match.params.tableName}</h3>
				<FormControl type="text" id="test-input"></FormControl>
				<br />
				<ButtonToolbar>
					<Button bsStyle="primary" bsSize="sm" onClick={() => { new Function(this.runCode())(); }}><Glyphicon glyph="play" /> Run custom code </Button>
					<Button bsStyle="primary" bsSize="sm" onClick={() => { new Function(this.hideInput())(); }}><Glyphicon glyph="play" /> Hide input </Button>
				</ButtonToolbar>
				<br />

				{/*<ButtonToolbar>
					<Button bsStyle="primary" bsSize="sm"><Glyphicon glyph="plus" /> New record </Button>
					<Button bsSize="sm"><Glyphicon glyph="pencil" /> Edit </Button>
					<Button bsStyle="danger" bsSize="sm"><Glyphicon glyph="remove" /> Delete </Button>
				</ButtonToolbar>
				<Table striped hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
							<th>Table heading</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
							<td>Table cell</td>
						</tr>
					</tbody>
				</Table>*/}
			</div>
		)
	}
}

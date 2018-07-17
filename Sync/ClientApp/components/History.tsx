import * as React from 'react';
import { Table, Pager } from 'react-bootstrap';

export class History extends React.Component<{}, {}> {
	public render() {
		return (
			<div>
				<h3>Current history log</h3>
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
						<tr className="warning">
							<td>update</td>
							<td>People</td>
							<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
							<td>{`{"name": "john doe1"}`}</td>
						</tr>
						<tr className="warning">
							<td>update</td>
							<td>People</td>
							<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
							<td>{`{"name": "john doe12"}`}</td>
						</tr>
						<tr className="warning">
							<td>update</td>
							<td>People</td>
							<td>5a0a3273-8fdf-4436-86f5-a9aabe64af24</td>
							<td>{`{"name": "john doe123"}`}</td>
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
			</div>
		)
	}
}

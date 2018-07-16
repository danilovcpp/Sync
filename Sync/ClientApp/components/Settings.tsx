import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';
import { Sync } from './Sync';

export default class Settings extends React.Component<RouteComponentProps<{}>, {}> {
	public render() {
		return (
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example" animation={false}>
				<Tab eventKey={1} title="Sync">
					<Sync />
				</Tab>
				<Tab eventKey={2} title="History">
					History
				</Tab>
			</Tabs>
		)
	}
}

import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Settings from './components/Settings';
import TableView from './components/TableView';

export const routes = (
	<Layout>
		<Route exact path='/' component={Home} />
		<Route exact path='/settings' component={Settings} />
		<Route exact path='/tables/:tableName' component={TableView} />
	</Layout>
)

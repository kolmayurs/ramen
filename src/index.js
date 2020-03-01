import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import store from './store';
import {Provider} from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));
serviceWorker.register();

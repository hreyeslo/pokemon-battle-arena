import reportWebVitals from './reportWebVitals';
import { GlobalStore } from '@app/redux/store';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';

import '@app/i18n/config';

const store = GlobalStore.getInstance();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback="loading">
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

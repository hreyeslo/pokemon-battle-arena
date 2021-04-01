import reportWebVitals from './reportWebVitals';
import { GlobalStore } from '@app/redux/store';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import App from '@app/components/app';
import ReactDOM from 'react-dom';
import '@app/scss/styles.scss';
import '@app/i18n/config';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={GlobalStore.getInstance()}>
			<Suspense fallback="loading">
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

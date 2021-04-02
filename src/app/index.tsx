import reportWebVitals from './reportWebVitals';
import { StoreService } from '@app/redux/store';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import App from '@app/components/app';
import ReactDOM from 'react-dom';
import '@app/scss/styles.scss';
import '@app/i18n/config';

ReactDOM.render(
	<Provider store={StoreService}>
		<Suspense fallback="loading">
			<App />
		</Suspense>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();

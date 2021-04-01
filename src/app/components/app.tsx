import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { selectAppTheme } from '@app/redux/selectors/app.selectors';
import Onboarding from '@app/components/onboarding/onboarding';
import Arena from '@app/components/arena/arena';
import { useTranslation } from 'react-i18next';
import logo from '@app/assets/images/logo.svg';
import { Theme } from '@app/redux/models';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './app.scss';

const App = () => {

	const { t } = useTranslation('app');
	const appTheme = useSelector(selectAppTheme);

	useEffect(() => setThemeAttributes(appTheme), [appTheme.name, appTheme.variant]);

	const setThemeAttributes = (theme: Theme) => {
		const rootNode = document.getElementsByTagName('html')[0];
		if (rootNode) {
			rootNode.setAttribute('theme', theme.name);
			rootNode.setAttribute('variant', theme.variant);
		}
	}

	return (
		<div className="app">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{t('title')}
				</p>
			</header>
			<main>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Redirect to="/onboarding" />
						</Route>
						<Route path="/onboarding">
							<Onboarding />
						</Route>
						<Route path="/arena">
							<Arena />
						</Route>
					</Switch>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;

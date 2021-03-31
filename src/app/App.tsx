import { setAppTheme, setAppThemeVariant } from '@app/redux/actions/app.actions';
import { selectAppTheme } from '@app/redux/selectors/app.selectors';
import { Theme, ThemeVariants } from '@app/redux/models';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {

	const dispatch = useDispatch();
	const appTheme = useSelector(selectAppTheme);

	useEffect(() => setThemeAttributes(appTheme), [appTheme.name, appTheme.variant]);

	const setThemeAttributes = (theme: Theme) => {
		const rootNode = document.getElementsByTagName('html')[0];
		if (rootNode) {
			rootNode.setAttribute('theme', theme.name);
			rootNode.setAttribute('variant', theme.variant);
		}
	}

	const changeTheme = (event, name: string) => {
		event.preventDefault();
		dispatch(setAppTheme(name));
	}

	const changeThemeVariation = (event, variation: ThemeVariants) => {
		event.preventDefault();
		dispatch(setAppThemeVariant(variation));
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div>
					<span>Theme</span>
					<div>
						<button onClick={(e) => changeTheme(e, 'default')}>Default</button>
						<button onClick={(e) => changeTheme(e, 'custom')}>Custom</button>
					</div>
					<span>Variant</span>
					<div>
						<button onClick={(e) => changeThemeVariation(e, 'light')}>Light</button>
						<button onClick={(e) => changeThemeVariation(e, 'dark')}>Dark</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;

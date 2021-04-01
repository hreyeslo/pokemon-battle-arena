import { setAppLang, setAppTheme, setAppThemeVariant } from '@app/redux/actions/app.actions';
import { selectAppTheme } from '@app/redux/selectors/app.selectors';
import { Theme, ThemeVariants } from '@app/redux/models';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import logo from './25.svg';
import './App.scss';

const App = () => {

	const dispatch = useDispatch();
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

	const changeTheme = (event, name: string) => {
		event.preventDefault();
		dispatch(setAppTheme(name));
	}

	const changeThemeVariation = (event, variation: ThemeVariants) => {
		event.preventDefault();
		dispatch(setAppThemeVariant(variation));
	}

	const changeLang = (event, lang: string) => {
		event.preventDefault();
		dispatch(setAppLang(lang));
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{t('title')}
				</p>
				<div>
					<span>Lang</span>
					<div>
						<button onClick={(e) => changeLang(e, 'es-ES')}>es-ES</button>
						<button onClick={(e) => changeLang(e, 'en-US')}>en-US</button>
					</div>
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

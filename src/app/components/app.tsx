import { setAppLang, setAppTheme, setAppThemeVariant } from '@app/redux/actions/app.actions';
import { Languages, Theme, ThemeNames, ThemeVariants } from '@app/redux/models';
import { selectAppTheme } from '@app/redux/selectors/app.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '@app/assets/images/logo.svg';
import React, { useEffect } from 'react';
import './app.scss';

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

	const changeTheme = (event, name: ThemeNames) => {
		event.preventDefault();
		dispatch(setAppTheme(name));
	}

	const changeThemeVariation = (event, variation: ThemeVariants) => {
		event.preventDefault();
		dispatch(setAppThemeVariant(variation));
	}

	const changeLang = (event, lang: Languages) => {
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
				<div className={'App-container'}>
					<span>{t('lang.name')}</span>
					<div className={'button-container'}>
						<button className={'button'} onClick={(e) => changeLang(e, 'es-ES')}>{t('lang.es-ES')}</button>
						<button className={'button'} onClick={(e) => changeLang(e, 'en-US')}>{t('lang.en-US')}</button>
					</div>
					<span>{t('theming.theme')}</span>
					<div className={'button-container'}>
						<button className={'button'} onClick={(e) => changeTheme(e, 'default')}>Default</button>
						<button className={'button'} onClick={(e) => changeTheme(e, 'custom')}>Custom</button>
					</div>
					<span>{t('theming.variant')}</span>
					<div className={'button-container'}>
						<button className={'button'} onClick={(e) => changeThemeVariation(e, 'light')}>{t('theming.light')}</button>
						<button className={'button'} onClick={(e) => changeThemeVariation(e, 'dark')}>{t('theming.dark')}</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;


import { setAppI18n, setAppTheme, setAppThemeVariant } from '@app/redux/actions/app.actions';
import { selectAppLang, selectAppSupportedLangs } from '@app/redux/selectors/app.selectors';
import { Languages, ThemeNames, ThemeVariants } from '@app/redux/models';
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Line } from 'rc-progress';
import React from 'react';
import './onboarding.scss';

const Onboarding = () => {

	const dispatch = useDispatch();
	const { t } = useTranslation('onboarding');
	const suportedLanguages = useSelector(selectAppSupportedLangs);
	const selectedLang = useSelector(selectAppLang);

	const changeLang = (event, lang: Languages) => {
		event.preventDefault();
		dispatch(setAppI18n({ lang }));
	}

	const changeTheme = (event, name: ThemeNames) => {
		event.preventDefault();
		dispatch(setAppTheme(name));
	}

	const changeThemeVariation = (event, variation: ThemeVariants) => {
		event.preventDefault();
		dispatch(setAppThemeVariant(variation));
	}

	return (
		<Route
			render={({ history, match: { url } }) => (
				<Wizard history={history} basename={url} render={({ step, steps }) => (
					<div>
						<Line
							percent={(steps.indexOf(step) + 1) / steps.length * 100}
							className="pad-b"
						/>
						<Steps>
							<Step id="language">
								<div className={'button-container'}>
									{suportedLanguages.map((lang: Languages, index) => (
										<button
											key={index}
											className={`button ${lang === selectedLang ? 'active' : ''}`}
											onClick={(e) => changeLang(e, lang)}
										>
											{t(`langs.${lang}`)}
										</button>
									))}
								</div>
							</Step>
							<Step id="theme">
								<div className={'button-container'}>
									<button className={'button'} onClick={(e) => changeTheme(e, 'default')}>Default</button>
									<button className={'button'} onClick={(e) => changeTheme(e, 'custom')}>Custom</button>
								</div>
								<span>{t('theming.variant')}</span>
								<div className={'button-container'}>
									<button className={'button'} onClick={(e) => changeThemeVariation(e, 'light')}>{t('theming.light')}</button>
									<button className={'button'} onClick={(e) => changeThemeVariation(e, 'dark')}>{t('theming.dark')}</button>
								</div>
							</Step>
							<Step id="render-mode">
								<h1 className="text-align-center">Tipo de renderizado</h1>
							</Step>
							<Step id="player">
								<h1 className="text-align-center">Ice King</h1>
							</Step>
						</Steps>
						<WithWizard
							render={({ next, previous, step, steps }) => (
								<div className="example-buttons">
									{steps.indexOf(step) < steps.length - 1 && (
										<button className="btn-fluid margin-1-b" onClick={next}>
											Next
										</button>
									)}

									{steps.indexOf(step) > 0 && (
										<button className="btn-fluid btn-secondary" onClick={previous}>
											Back
										</button>
									)}
								</div>
							)}
						/>
					</div>
				)}>
				</Wizard>
			)}
		/>
	);
}

export default Onboarding;

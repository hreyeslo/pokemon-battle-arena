import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { setAppI18n } from '@app/redux/actions/app.actions';
import ChainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { StoreService } from '@app/redux/store';
import { Languages } from '@app/redux/models/app.model';
import i18next, { i18n } from 'i18next';
import { Store } from 'redux';
import { get } from 'lodash';

const supportedLangs = (process.env.REACT_APP_SUPORTED_LANGS || '').trim().split('|');

class ReduxI18nextConnector {

	private _i18nInstance: i18n;

	private _storeInstance: Store;

	private _lang: Languages | undefined;

	constructor(i18next: i18n) {
		this._i18nInstance = i18next;
		this._storeInstance = StoreService;
		this._lang = undefined;
		this._storeInstance.dispatch(setAppI18n({ supported: supportedLangs as Languages[] }));
	}

	public init(statePath: string[] = ['appState', 'i18n', 'lang']) {
		const { language } = this._i18nInstance;
		this._storeInstance.subscribe(() => {
			const newLang = get(this._storeInstance.getState(), statePath);
			const currentLang = this._lang;
			if (!currentLang && newLang) {
				this._lang = newLang;
			} else if (newLang && currentLang !== newLang) {
				this._lang = newLang;
				this._i18nInstance.changeLanguage(newLang);
			}
		})
		this._storeInstance.dispatch(setAppI18n({ lang: language as Languages }));
	}
}

i18next
	.use(ChainedBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: supportedLangs,
		fallbackLng: process.env.REACT_APP_FALLBACK_LANG || 'en-US',
		debug: false,
		load: 'currentOnly',
		defaultNS: 'app',
		ns: ['app', 'onboarding', 'arena'],
		backend: {
			backends: [LocalStorageBackend, HttpBackend],
			backendOptions: [{
				prefix: 'i18n_',
				expirationTime: 7,
				defaultVersion: 'v1.0.0'
			}, {
				loadPath: '/locales/{{lng}}/{{ns}}.json'
			}]
		},
		interpolation: {
			escapeValue: false,
		}
	}, (error) => {
		if (!error) {
			new ReduxI18nextConnector(i18next).init();
		}
	});

export default i18next;
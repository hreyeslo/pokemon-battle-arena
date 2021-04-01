import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { setAppLang } from '@app/redux/actions/app.actions';
import ChainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import { GlobalStore } from '@app/redux/store';
import i18next, { i18n } from 'i18next';
import { Store } from 'redux';
import { get } from 'lodash';

class ReduxI18nextConnector {

	private _i18nInstance: i18n;

	private _storeInstance: Store;

	private _lang: string | undefined;

	constructor(i18next: i18n) {
		this._i18nInstance = i18next;
		this._storeInstance = GlobalStore.getInstance();
		this._lang = undefined;
	}

	public init(statePath: string[] = ['appState', 'lang']) {
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
		this._storeInstance.dispatch(setAppLang(language));
	}
}

i18next
	.use(ChainedBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['en-US', 'es-ES'],
		fallbackLng: 'en-US',
		debug: false,
		load: 'currentOnly',
		defaultNS: 'app',
		ns: ['app'],
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
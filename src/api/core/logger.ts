import { LoggerCustomMethods } from '@api/core/models';
import { Signale, SignaleOptions } from 'signale';

class LoggerService {

	private static options: SignaleOptions<LoggerCustomMethods> = {
		disabled: false,
		interactive: false,
		logLevel: 'info',
		scope: 'Global',
		secrets: [],
		stream: process.stdout,
		types: {
			listening: {
				badge: '√',
				color: 'green',
				label: 'server listening on',
				logLevel: 'info'
			},
		}
	};

	private static _instance: LoggerService;

	private static _registry = {};

	constructor() {
		LoggerService._registry['global'] = new Signale<LoggerCustomMethods>(LoggerService.options);
	}

	public static getInstance(): LoggerService {
		if (!LoggerService._instance) {
			LoggerService._instance = new LoggerService();
		}
		return LoggerService._instance;
	}

	public getScopedLogger(scope = 'global'): Signale<LoggerCustomMethods> {
		try {
			const _logger = LoggerService._registry[scope];
			if (!_logger) {
				LoggerService._registry[scope] = new Signale<LoggerCustomMethods>({
					...LoggerService.options,
					scope
				});
				return LoggerService._registry[scope];
			}
			return _logger;
		} catch (error) {
			console.log(error);
		}

	}

}


export const Logger: Signale<LoggerCustomMethods> = LoggerService.getInstance().getScopedLogger();

export const ScopedLogger = (scope): Signale<LoggerCustomMethods> => LoggerService.getInstance().getScopedLogger(scope);
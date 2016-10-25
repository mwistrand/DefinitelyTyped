// Type definitions for MessageFormat 1.0.2
// Project: https://messageformat.github.io/
// Definitions by: Matt Wistrand <https://github.com/mwistrand
//
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace MessageFormat {
	interface Formatter {
		(...params: any[]): string;
	}

	interface FormatterMap {
		[name: string]: Formatter;
	}

	interface Messages {
		[key: string]: string;
	}

	interface StaticFormatters {
		date(date: string | number, locale: string, format?: string): string;
		number(instance: MessageFormat): (value: number, locale: string, format?: string) => string;
		time(datetime: string | number, locale: string, format?: string): string;
	}

	interface MessageFormat {
		addFormatters(formatter: FormatterMap): MessageFormat;

		compile(message: string, locale?: string): Formatter;
		compile(messages: Messages, locale?: string): FormatterMap;
		compile(messages: any, locale?: string): Formatter | FormatterMap;

		disablePluralKeyChecks(): MessageFormat;
		setBiDiSupport(enable: boolean): MessageFormat;
		setIntlSupport(enable: boolean): MessageFormat;
		setStrictuNumberSign(enable: boolean): MessageFormat;
	}

	interface MessageFormatStatic {
		defaultLocale: string;
		escape(str: string): string;
		formatters: StaticFormatters;
		new(locale: string): MessageFormat;
	}
}

declare let MessageFormat: MessageFormat.MessageFormatStatic;

declare module 'messageformat' {
	export = MessageFormat;
}

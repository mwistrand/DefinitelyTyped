/// <reference path="messageformat.d.ts" />
import * as MessageFormmat from 'messageformat';

const message = 'Lorem ipsum dolor sit amet.';
let mf = new MessageFormat('en');

MessageFormat.defaultLocale;
MessageFormat.escape(message);

MessageFormat.formatters.date(Date.now(), 'ar-JO');
MessageFormat.formatters.date(Date.now(), 'ar-JO', 'short');
MessageFormat.formatters.date(new Date().toISOString(), 'ar-JO');
MessageFormat.formatters.date(new Date().toISOString(), 'ar-JO', 'short');

const numberFormatter = MessageFormat.formatters.number(mf);
numberFormatter(12345, 'ar-JO');
numberFormatter(12345, 'ar-JO', 'currency');

MessageFormat.formatters.time(Date.now(), 'ar-JO');
MessageFormat.formatters.time(Date.now(), 'ar-JO', 'short');
MessageFormat.formatters.time(new Date().toISOString(), 'ar-JO');
MessageFormat.formatters.time(new Date().toISOString(), 'ar-JO', 'short');

let formatter = mf.compile(message);
formatter = mf.compile(message, 'en-US');
formatter({ count: 42 });

const formatters = mf.compile({
	key: message
});
formatters['key']({ count: 42 });

mf.addFormatters({
	upcase(value: string): string {
		return value.toUpperCase();
	}
});

mf = mf.disablePluralKeyChecks();
mf = mf.setBiDiSupport(true);
mf = mf.setIntlSupport(false);
mf = mf.setStrictuNumberSign(true);

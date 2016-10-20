// Type definitions for cldr-data
// Project: https://github.com/rxaviers/cldr-data-npm
// Definitions by: Matt Wistrand <https://github.com/mwistrand/>
interface CldrData {
	(path: string): Object;

	readonly availableLocales: string[];
	all: () => Object[];
	entireMainFor: (locale: string) => Object[];
	entireSupplemental: () => Object[];
}

declare let cldrData: CldrData;

declare module "cldr-data" {
	export = cldrData;
}

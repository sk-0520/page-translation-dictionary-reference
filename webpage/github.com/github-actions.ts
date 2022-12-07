//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query';
//import { CommonText } from './github-common-text';

/**
 * アクション
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([\.a-zA-Z0-9_-]+)\/actions(\/(workflows|caches))?/,
		setting: {
			query: [
				//#region
				//#endregion
			],
			import: [
				...Object.keys(CommonQuery).filter(i => !(/^\d+$/.test(i))),
			]
		}
	};
}

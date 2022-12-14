//import * as setting from '../../page-translation-dictionary/source/scripts/extension/setting';
import * as webpage from '../webpage';
import { CommonQuery } from './github-common-query'

/**
 * ソース一覧
 */
export default function get(): webpage.PathPair {
	return {
		pattern: /^\/([a-zA-Z0-9_-]+)\/([\.a-zA-Z0-9_-]+)((\/tree?\/?)|(\/?$))/,
		setting: {
			query: [
				//#region ソースなし
				// 非ログイン
				{
					selector: {
						value: ".blankslate h3"
					},
					text: {
						replace: {
							value: "このリポジトリは空っぽです！"
						}
					}
				},
				// めんどい
				/*
				{
					selector: {
						value: ".blankslate p",
						node: webpage.TextNode.All
					},
					text: {
						matches: [
							{
								pattern: "",
								replace: {
									value: ""
								}
							},
							{
								pattern: "",
								replace: {
									value: ""
								}
							},
						]
					}
				},
				{
					selector: {
						value: ".blankslate p a",
					},
					text: {
						replace: {
							value: ""
						}
					}
				},
				//*/
				// ログイン済み
				{
					selector: {
						value: "git-clone-help h3 strong"
					},
					text: {
						replace: {
							// Quick setup: すばやく？ 簡易？ ぱぱっと？ えいや！
							value: "簡易構築"
						}
					}
				},
				{
					selector: {
						value: "git-clone-help h3",
						node: 1
					},
					text: {
						replace: {
							value: " — 構築処理を理解している場合の方法"
						}
					}
				},
				//#endregion
				//#region ソースあり
				{
					selector: {
						value: "#branch-select-menu summary + .SelectMenu .SelectMenu-title"
					},
					text: {
						replace: {
							value: "ブランチ切り替え",
						}
					}
				},
				{
					selector: {
						value: "#context-commitish-filter-field"
					},
					attributes: {
						placeholder: {
							replace: {
								value: "ブランチ/タグで絞り込み",
							}
						}
					}
				},
				{
					selector: {
						value: "#branch-select-menu summary + .SelectMenu [role='tablist'] button",
						all: true
					},
					text: {
						matches: [
							{
								mode: "perfect",
								pattern: "Branches",
								replace: {
									value: "ブランチ"
								}
							},
							{
								mode: "perfect",
								pattern: "Tags",
								replace: {
									value: "タグ"
								}
							},
						]
					}
				},
				{
					selector: {
						value: "#branch-select-menu .flex-self-start"
					},
					text: {
						matches: [
							{
								mode: "perfect",
								pattern: "default",
								replace: {
									value: "デフォルト"
								}
							}
						],
					}
				},
				{
					selector: {
						value: "#ref-list-branches a[href$='/branches']"
					},
					text: {
						replace: {
							value: "ブランチ一覧を表示"
						}
					}
				},
				{
					selector: {
						value: "#tags-menu a[href$='/tags']"
					},
					text: {
						replace: {
							value: "タグ一覧を表示"
						}
					}
				},
				{
					selector: {
						value: ".file-navigation a[href$='/branches'] .color-fg-muted"
					},
					text: {
						replace: {
							value: "ブランチ"
						}
					}
				},
				{
					selector: {
						value: ".file-navigation a[href$='/tags'] .color-fg-muted"
					},
					text: {
						replace: {
							value: "タグ"
						}
					}
				},
				{
					selector: {
						value: ".file-navigation a[href*='/find/']"
					},
					text: {
						replace: {
							value: "ファイル検索"
						}
					}
				},
				{
					selector: {
						value: [
							".file-navigation .d-flex details summary span",
							"span.d-md-flex:nth-child(1)", //@DOM
						].join(','),
						node: webpage.TextNode.FirstOccurrence
					},
					text: {
						matches: [
							{
								pattern: "Add file",
								replace: {
									value: "ファイル追加"
								}
							}
						],
					}
				},
				{
					selector: {
						value: [
							".file-navigation .d-flex details form[action*='/new/'] button",
							"ul.dropdown-menu > li:nth-child(3) > form:nth-child(1) > button:nth-child(2)"
						].join(','),
					},
					text: {
						replace: {
							value: "新規ファイル"
						}
					}
				},
				{
					selector: {
						value: [
							".file-navigation .d-flex details a.dropdown-item[href*='/upload/']",
							"ul.dropdown-menu > li:nth-child(4) > a:nth-child(1)",
						].join(',')
					},
					text: {
						replace: {
							value: "アップロード"
						}
					}
				},
				{
					selector: {
						value: ".Box .Box-header a strong"
					},
					text: {
						replace: {
							value: '履歴',
						}
					}
				},
				// Code
				{
					selector: {
						value: ".file-navigation get-repo summary",
						node: webpage.TextNode.FirstOccurrence
					},
					text: {
						matches: [
							{
								pattern: 'Code',
								replace: {
									value: "コード"
								}
							}
						]
					}
				},
				{
					selector: {
						value: ".file-navigation get-repo .text-bold",
						node: 2
					},
					text: {
						replace: {
							value: "クローン"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar h2",
					},
					text: {
						replace: {
							value: "情報"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href$='#readme']",
						node: 2
					},
					text: {
						replace: {
							value: " README"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href$='/stargazers']",
						node: 3
					},
					text: {
						replace: {
							value: " スター"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href$='/watchers']",
						node: 3
					},
					text: {
						replace: {
							value: " 注目"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href$='/network/members']",
						node: 3
					},
					text: {
						replace: {
							value: " フォーク"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href$='/releases']",
						node: 3
					},
					text: {
						replace: {
							value: " リリース"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar a[href*='/packages']",
						node: 3
					},
					text: {
						replace: {
							value: " パッケージ"
						}
					}
				},
				{
					selector: {
						value: ".Layout-sidebar h2",
						all: true
					},
					text: {
						matches: [
							{
								pattern: "Languages",
								replace: {
									value: " 言語"
								}
							}
						]
					}
				},
				//#endregion
			],
			import: [
				...Object.keys(CommonQuery).filter(i => !(/^\d+$/.test(i))),
			]
		},
	};
}

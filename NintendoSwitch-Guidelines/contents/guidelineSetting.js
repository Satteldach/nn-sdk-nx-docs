var GuidelineN = GuidelineN || function() {};

GuidelineN.storagePath = "/NintendoSwitch,Nx,Switch-SWITCHGLINEEN-en/";

GuidelineN.searchByIdTitle = "Search by ID";

GuidelineN.initialOpen = false;

GuidelineN.filterResetButtonLabel = "Clear highlighting";
GuidelineN.filterSettingTitle = "Filter settings";
GuidelineN.functionFilterTitle = "Related-feature tags";

GuidelineN.allOpenButtonLabel = "Expand all";
GuidelineN.allCloseButtonLabel = "Collapse all";

GuidelineN.guidelineButtonLabel = "Guidelines";

GuidelineN.displayParamSetting = {
  "backgrounder":false,
  "testsection":false
};

GuidelineN.displayParamTitle = {
  "backgrounder":"Backgrounders",
  "testsection":"Test Methods"
};

GuidelineN.guidelineParamTitle = {
  "Definition":"Guideline Item",
  "TestMethod":"Test Method",
  "Criterion":"Pass/Fail Determination",
  "TestObject":"Software to Be Tested",
  "Exclusion":"Exceptions",
  "Remarks":"Notes",
  "Backgrounder":"Backgrounder",
  "Reference":"References",
  "Tips":"Tips",
  "GuidelineId":"Guideline ID",
  "Tags":"Tags",
  "DisplayStatus":"Highlight",
  "ItemName":"Guideline Name",
  "Changelog":"Revision History",
};

GuidelineN.displayParamTarget = {
  "fixed" : [{ "name":"TestObject", "flag":true },{ "name":"Exclusion", "flag":false }],
  "backgrounder" : [{ "name":"Backgrounder", "flag":true },{ "name":"Reference", "flag":false }],
  "testsection" : [{ "name":"TestMethod", "flag":true },{ "name":"Criterion", "flag":true },{ "name":"Tips", "flag":false }],
  "idsection" : [{ "name":"GuidelineId", "flag":true }],
  "tagsection" : [{ "name":"Tags", "flag":true }],
  "changelogsection" : [{ "name":"Changelog", "flag":true }],
};

GuidelineN.searchScoreSetting = {
  "Title":10
 ,"Definition":10
 ,"TestObject":1
 ,"Exclusion":1
 ,"Backgrounder":1
 ,"Reference":1
 ,"TestMethod":1
 ,"Criterion":1
 ,"Tips":1
 ,"Tags":1
 ,"Text":1
 ,"Changelog":1
};

GuidelineN.searchInParamSetting = {
  "Title":false
 ,"Definition":false
 ,"TestObject":true
 ,"Exclusion":true
 ,"Backgrounder":true
 ,"Reference":true
 ,"TestMethod":true
 ,"Criterion":true
 ,"Tips":true
 ,"Tags":true
 ,"Text":false
 ,"Changelog":true
};

GuidelineN.readerTagList = [
];

GuidelineN.functionTagList = [
  { "label":"function-ファイルシステム","text":"File system"}
 ,{ "label":"function-エラー表示","text":"Displaying errors"}
 ,{ "label":"function-撮影機能","text":"Capture feature"}
 ,{ "label":"function-振り回し","text":"Swinging motions"}
 ,{ "label":"function-タッチスクリーン","text":"Touch screen"}
 ,{ "label":"function-加速度センサー","text":"Accelerometer"}
 ,{ "label":"function-ジャイロセンサー","text":"Gyroscope"}
 ,{ "label":"function-テレビ表示","text":"TV display"}
 ,{ "label":"function-nex","text":"NEX"}
 ,{ "label":"function-インターネット通信","text":"Internet communication"}
 ,{ "label":"function-独自サーバー","text":"Independent servers"}
 ,{ "label":"function-パッチ","text":"Patches"}
 ,{ "label":"function-eコマース","text":"E-commerce"}
 ,{ "label":"function-フレンドライブラリ","text":"friends library"}
 ,{ "label":"function-nexデータストア","text":"NEX data stores"}
 ,{ "label":"function-bcat","text":"BCAT"}
 ,{ "label":"function-nfp","text":"NFP"}
 ,{ "label":"function-ugc","text":"UGC"}
 ,{ "label":"function-ペアレンタルコントロール","text":"Parental Controls"}
 ,{ "label":"function-デバイスの着脱","text":"Attaching and detaching devices"}
 ,{ "label":"function-irセンサー","text":"IR Motion Camera"}
 ,{ "label":"function-テキスト表示","text":"Displaying text"}
 ,{ "label":"function-ローカル通信","text":"Local communication"}
 ,{ "label":"function-素材集","text":"Artwork Collection"}
 ,{ "label":"function-広告表示","text":"Displaying advertisements"}
 ,{ "label":"function-エラーハンドリング","text":"Error handling"}
 ,{ "label":"function-プレイモード切り替え","text":"Changing between play modes"}
 ,{ "label":"function-すべてのアプリケーション","text":"All applications"}
 ,{ "label":"function-アカウント","text":"Accounts"}
 ,{ "label":"function-体験版","text":"Demos"}
 ,{ "label":"function-使用許可制api","text":"Restricted API functions"}
 ,{ "label":"function-omas","text":"OMAS"}
 ,{ "label":"function-画面焼け","text":"Screen burn-in"}
 ,{ "label":"function-クロスプラットフォーム","text":"Cross-platform"}
 ,{ "label":"function-マイク","text":"Microphone"}
 ,{ "label":"function-個人情報","text":"Personal information"}
 ,{ "label":"function-クラッシュレポート","text":"Crash reports"}
 ,{ "label":"function-自動スリープ","text":"Auto-sleep"}
 ,{ "label":"function-nintendoswitchonline","text":"Nintendo Switch Online"}
 ,{ "label":"function-プレイ情報","text":"Play data"}
 ,{ "label":"function-システムチック","text":"System ticks"}
 ,{ "label":"function-toycon","text":"Toy-Con"}
 ,{ "label":"function-vr","text":"VR"}
 ,{ "label":"function-china_region","text":"For China"}
 ,{ "label":"function-アラーム","text":"Alarms"}
 ,{ "label":"function-lan内通信","text":"Internal LAN communication"}
 ,{ "label":"function-プレイレポート","text":"Play reports"}
 ,{ "label":"function-レッグバンド","text":"Leg strap"}
 ,{ "label":"function-npln","text":"NPLN"}
 ,{ "label":"function-ニンテンドーアカウントの認可リクエスト","text":"Authorization requests for Nintendo Accounts"}
 ,{ "label":"function-マッチメイクボイスチャット","text":"Matchmaking Voice Chat"}
 ,{ "label":"function-他人が権利を保有するコンテンツ","text":"Content whose rights are retained by a third party"}
 ,{ "label":"function-カメラ","text":"Camera"}
 ,{ "label":"function-違反件数が多い","text":"Most-failed guidelines"}
 ,{ "label":"function-事前承認が必要","text":"Must get approval in advance"}
];

GuidelineN.revisionTagList = [
  { "label":"revision-updated-20240325","text":"Updated v20240325"}
 ,{ "label":"revision-updated-20240626","text":"Updated v20240626"}
 ,{ "label":"revision-updated-20240206","text":"Updated v20240206"}
 ,{ "label":"revision-updated-21.0","text":"Updated v21.0"}
 ,{ "label":"revision-updated-20.0","text":"Updated v20.0"}
 ,{ "label":"revision-updated-19.1","text":"Updated v19.1"}
 ,{ "label":"revision-updated-19.0","text":"Updated v19.0"}
 ,{ "label":"revision-updated-18.0","text":"Updated v18.0"}
 ,{ "label":"revision-updated-17.0","text":"Updated v17.0"}
 ,{ "label":"revision-updated-16.1","text":"Updated v16.1"}
 ,{ "label":"revision-updated-16.0","text":"Updated v16.0"}
 ,{ "label":"revision-updated-15.0","text":"Updated v15.0"}
 ,{ "label":"revision-updated-14.0","text":"Updated v14.0"}
 ,{ "label":"revision-updated-13.1","text":"Updated v13.1"}
 ,{ "label":"revision-updated-13.0","text":"Updated v13.0"}
 ,{ "label":"revision-updated-12.0","text":"Updated v12.0"}
 ,{ "label":"revision-updated-11.0","text":"Updated v11.0"}
 ,{ "label":"revision-updated-10.1","text":"Updated v10.1"}
 ,{ "label":"revision-updated-10.0","text":"Updated v10.0"}
 ,{ "label":"revision-updated-9.0","text":"Updated v9.0"}
 ,{ "label":"revision-updated-8.0","text":"Updated v8.0"}
 ,{ "label":"revision-updated-7.0","text":"Updated v7.0"}
 ,{ "label":"revision-updated-6.0","text":"Updated v6.0"}
 ,{ "label":"revision-updated-5.2","text":"Updated v5.2"}
 ,{ "label":"revision-updated-5.1","text":"Updated v5.1"}
 ,{ "label":"revision-updated-5.0","text":"Updated v5.0"}
 ,{ "label":"revision-updated-4.0","text":"Updated v4.0"}
 ,{ "label":"revision-updated-3.2","text":"Updated v3.2"}
 ,{ "label":"revision-updated-3.1","text":"Updated v3.1"}
 ,{ "label":"revision-updated-3.0","text":"Updated v3.0"}
 ,{ "label":"revision-updated-2.0","text":"Updated v2.0"}
 ,{ "label":"revision-updated-1.1","text":"Updated v1.1"}
 ,{ "label":"revision-updated-1.0","text":"Updated v1.0"}
 ,{ "label":"revision-updated-0.8","text":"Updated v0.8"}
 ,{ "label":"revision-updated-0.7","text":"Updated v0.7"}
 ,{ "label":"revision-updated-0.6","text":"Updated v0.6"}
 ,{ "label":"revision-updated-0.5","text":"Updated v0.5"}
 ,{ "label":"revision-updated-0.4","text":"Updated v0.4"}
 ,{ "label":"revision-updated-0.3","text":"Updated v0.3"}
 ,{ "label":"revision-updated-0.2","text":"Updated v0.2"}
];

GuidelineN.enabledTagList = {
  "function-ファイルシステム":false
 ,"function-エラー表示":false
 ,"function-撮影機能":false
 ,"function-振り回し":false
 ,"function-タッチスクリーン":false
 ,"function-加速度センサー":false
 ,"function-ジャイロセンサー":false
 ,"function-テレビ表示":false
 ,"function-nex":false
 ,"function-インターネット通信":false
 ,"function-独自サーバー":false
 ,"function-パッチ":false
 ,"function-eコマース":false
 ,"function-フレンドライブラリ":false
 ,"function-nexデータストア":false
 ,"function-bcat":false
 ,"function-nfp":false
 ,"function-ugc":false
 ,"function-ペアレンタルコントロール":false
 ,"function-デバイスの着脱":false
 ,"function-irセンサー":false
 ,"function-テキスト表示":false
 ,"function-ローカル通信":false
 ,"function-素材集":false
 ,"function-広告表示":false
 ,"function-エラーハンドリング":false
 ,"function-プレイモード切り替え":false
 ,"function-すべてのアプリケーション":false
 ,"function-アカウント":false
 ,"function-体験版":false
 ,"function-使用許可制api":false
 ,"function-omas":false
 ,"function-画面焼け":false
 ,"function-クロスプラットフォーム":false
 ,"function-マイク":false
 ,"function-個人情報":false
 ,"function-クラッシュレポート":false
 ,"function-自動スリープ":false
 ,"function-nintendoswitchonline":false
 ,"function-プレイ情報":false
 ,"function-システムチック":false
 ,"function-toycon":false
 ,"function-vr":false
 ,"function-china_region":false
 ,"function-アラーム":false
 ,"function-lan内通信":false
 ,"function-プレイレポート":false
 ,"function-レッグバンド":false
 ,"function-npln":false
 ,"function-ニンテンドーアカウントの認可リクエスト":false
 ,"function-マッチメイクボイスチャット":false
 ,"function-他人が権利を保有するコンテンツ":false
 ,"function-カメラ":false
 ,"function-違反件数が多い":false
 ,"function-事前承認が必要":false
 ,"revision-updated-20240325":false
 ,"revision-updated-20240626":false
 ,"revision-updated-20240206":false
 ,"revision-updated-21.0":false
 ,"revision-updated-20.0":false
 ,"revision-updated-19.1":false
 ,"revision-updated-19.0":false
 ,"revision-updated-18.0":false
 ,"revision-updated-17.0":false
 ,"revision-updated-16.1":false
 ,"revision-updated-16.0":false
 ,"revision-updated-15.0":false
 ,"revision-updated-14.0":false
 ,"revision-updated-13.1":false
 ,"revision-updated-13.0":false
 ,"revision-updated-12.0":false
 ,"revision-updated-11.0":false
 ,"revision-updated-10.1":false
 ,"revision-updated-10.0":false
 ,"revision-updated-9.0":false
 ,"revision-updated-8.0":false
 ,"revision-updated-7.0":false
 ,"revision-updated-6.0":false
 ,"revision-updated-5.2":false
 ,"revision-updated-5.1":false
 ,"revision-updated-5.0":false
 ,"revision-updated-4.0":false
 ,"revision-updated-3.2":false
 ,"revision-updated-3.1":false
 ,"revision-updated-3.0":false
 ,"revision-updated-2.0":false
 ,"revision-updated-1.1":false
 ,"revision-updated-1.0":false
 ,"revision-updated-0.8":false
 ,"revision-updated-0.7":false
 ,"revision-updated-0.6":false
 ,"revision-updated-0.5":false
 ,"revision-updated-0.4":false
 ,"revision-updated-0.3":false
 ,"revision-updated-0.2":false
};

GuidelineN.guidelineIdList = [
  {"GuidelineId":"0003","PageId":"2367451859"}
 ,{"GuidelineId":"0004","PageId":"2367451861"}
 ,{"GuidelineId":"0006","PageId":"2367451924"}
 ,{"GuidelineId":"0008","PageId":"2367451868"}
 ,{"GuidelineId":"0010","PageId":"2367451930"}
 ,{"GuidelineId":"0011","PageId":"2367451952"}
 ,{"GuidelineId":"0012","PageId":"2367451954"}
 ,{"GuidelineId":"0013","PageId":"2367451956"}
 ,{"GuidelineId":"0024","PageId":"2367452211"}
 ,{"GuidelineId":"0026","PageId":"2367452213"}
 ,{"GuidelineId":"0027","PageId":"2367452215"}
 ,{"GuidelineId":"0028","PageId":"2367452182"}
 ,{"GuidelineId":"0029","PageId":"2367452217"}
 ,{"GuidelineId":"0031","PageId":"2367452219"}
 ,{"GuidelineId":"0033","PageId":"2367452221"}
 ,{"GuidelineId":"0035","PageId":"2367452241"}
 ,{"GuidelineId":"0036","PageId":"2367452260"}
 ,{"GuidelineId":"0042","PageId":"2367451926"}
 ,{"GuidelineId":"0044","PageId":"2367451932"}
 ,{"GuidelineId":"0049","PageId":"2367451870"}
 ,{"GuidelineId":"0050","PageId":"2367451936"}
 ,{"GuidelineId":"0053","PageId":"2367452325"}
 ,{"GuidelineId":"0055","PageId":"2367452381"}
 ,{"GuidelineId":"0056","PageId":"2367452385"}
 ,{"GuidelineId":"0057","PageId":"2367452389"}
 ,{"GuidelineId":"0059","PageId":"2367452391"}
 ,{"GuidelineId":"0063","PageId":"2367452379"}
 ,{"GuidelineId":"0067","PageId":"2367452383"}
 ,{"GuidelineId":"0069","PageId":"2367452313"}
 ,{"GuidelineId":"0075","PageId":"2367452315"}
 ,{"GuidelineId":"0076","PageId":"2367452317"}
 ,{"GuidelineId":"0079","PageId":"2367451876"}
 ,{"GuidelineId":"0083","PageId":"2367452369"}
 ,{"GuidelineId":"0093","PageId":"2367452387"}
 ,{"GuidelineId":"0094","PageId":"2367451938"}
 ,{"GuidelineId":"0096","PageId":"2367452006"}
 ,{"GuidelineId":"0097","PageId":"2367452010"}
 ,{"GuidelineId":"0098","PageId":"2367451972"}
 ,{"GuidelineId":"0099","PageId":"2367451977"}
 ,{"GuidelineId":"0100","PageId":"2367451984"}
 ,{"GuidelineId":"0101","PageId":"2367452144"}
 ,{"GuidelineId":"0110","PageId":"2367452223"}
 ,{"GuidelineId":"0111","PageId":"2367451874"}
 ,{"GuidelineId":"0112","PageId":"2367452207"}
 ,{"GuidelineId":"0117","PageId":"2367452243"}
 ,{"GuidelineId":"0118","PageId":"2367452371"}
 ,{"GuidelineId":"0119","PageId":"2367452393"}
 ,{"GuidelineId":"0120","PageId":"2367452184"}
 ,{"GuidelineId":"0121","PageId":"2367452186"}
 ,{"GuidelineId":"0122","PageId":"2367452190"}
 ,{"GuidelineId":"0123","PageId":"2367452323"}
 ,{"GuidelineId":"0124","PageId":"2367452331"}
 ,{"GuidelineId":"0125","PageId":"2367452361"}
 ,{"GuidelineId":"0126","PageId":"2367452363"}
 ,{"GuidelineId":"0130","PageId":"2367451884"}
 ,{"GuidelineId":"0132","PageId":"2367452341"}
 ,{"GuidelineId":"0133","PageId":"2367451918"}
 ,{"GuidelineId":"0134","PageId":"2367452196"}
 ,{"GuidelineId":"0135","PageId":"2367452201"}
 ,{"GuidelineId":"0136","PageId":"2367452262"}
 ,{"GuidelineId":"0137","PageId":"2367452237"}
 ,{"GuidelineId":"0138","PageId":"2367451942"}
 ,{"GuidelineId":"0139","PageId":"2367451944"}
 ,{"GuidelineId":"0140","PageId":"2367452266"}
 ,{"GuidelineId":"0144","PageId":"2367452194"}
 ,{"GuidelineId":"0145","PageId":"2367452225"}
 ,{"GuidelineId":"0146","PageId":"2367452339"}
 ,{"GuidelineId":"0147","PageId":"2367451960"}
 ,{"GuidelineId":"0148","PageId":"2367451962"}
 ,{"GuidelineId":"0150","PageId":"2367452227"}
 ,{"GuidelineId":"0151","PageId":"2367451964"}
 ,{"GuidelineId":"0152","PageId":"2367451966"}
 ,{"GuidelineId":"0153","PageId":"2367452278"}
 ,{"GuidelineId":"0154","PageId":"2367451890"}
 ,{"GuidelineId":"0155","PageId":"2367451892"}
 ,{"GuidelineId":"0156","PageId":"2367452295"}
 ,{"GuidelineId":"0158","PageId":"2367451886"}
 ,{"GuidelineId":"0159","PageId":"2367451894"}
 ,{"GuidelineId":"0160","PageId":"2367452168"}
 ,{"GuidelineId":"0161","PageId":"2367452345"}
 ,{"GuidelineId":"0162","PageId":"2367451946"}
 ,{"GuidelineId":"0163","PageId":"2367452303"}
 ,{"GuidelineId":"0164","PageId":"2367452343"}
 ,{"GuidelineId":"0165","PageId":"2367451898"}
 ,{"GuidelineId":"0166","PageId":"2367451906"}
 ,{"GuidelineId":"0167","PageId":"2367452229"}
 ,{"GuidelineId":"0168","PageId":"2367452282"}
 ,{"GuidelineId":"0169","PageId":"2367452284"}
 ,{"GuidelineId":"0170","PageId":"2367452305"}
 ,{"GuidelineId":"0171","PageId":"2367452351"}
 ,{"GuidelineId":"0172","PageId":"2367452044"}
 ,{"GuidelineId":"0173","PageId":"2367452046"}
 ,{"GuidelineId":"0175","PageId":"2367452203"}
 ,{"GuidelineId":"0176","PageId":"2367452286"}
 ,{"GuidelineId":"0177","PageId":"2367452353"}
 ,{"GuidelineId":"0178","PageId":"2367452355"}
 ,{"GuidelineId":"0180","PageId":"2367452052"}
 ,{"GuidelineId":"0181","PageId":"2367452060"}
 ,{"GuidelineId":"0182","PageId":"2367452231"}
 ,{"GuidelineId":"0183","PageId":"2367452096"}
 ,{"GuidelineId":"0184","PageId":"2367452100"}
 ,{"GuidelineId":"0185","PageId":"2367452104"}
 ,{"GuidelineId":"0186","PageId":"2367452113"}
 ,{"GuidelineId":"0187","PageId":"2367452123"}
 ,{"GuidelineId":"0188","PageId":"2367452297"}
 ,{"GuidelineId":"0189","PageId":"2367452347"}
 ,{"GuidelineId":"0190","PageId":"2367452245"}
 ,{"GuidelineId":"0191","PageId":"2367452248"}
 ,{"GuidelineId":"0192","PageId":"2367452375"}
 ,{"GuidelineId":"0193","PageId":"2367451910"}
 ,{"GuidelineId":"0194","PageId":"2367451912"}
 ,{"GuidelineId":"0195","PageId":"2367451900"}
 ,{"GuidelineId":"0196","PageId":"2367452192"}
 ,{"GuidelineId":"0197","PageId":"2367452233"}
 ,{"GuidelineId":"0198","PageId":"2367452272"}
 ,{"GuidelineId":"0199","PageId":"2367452280"}
 ,{"GuidelineId":"0200","PageId":"2367452333"}
 ,{"GuidelineId":"0201","PageId":"2367452126"}
 ,{"GuidelineId":"0202","PageId":"2367452268"}
 ,{"GuidelineId":"0203","PageId":"2367451880"}
 ,{"GuidelineId":"0204","PageId":"2367452335"}
 ,{"GuidelineId":"0205","PageId":"2367452128"}
 ,{"GuidelineId":"0206","PageId":"2367452252"}
 ,{"GuidelineId":"0207","PageId":"2367452255"}
 ,{"GuidelineId":"0208","PageId":"2367452288"}
 ,{"GuidelineId":"0209","PageId":"2367452290"}
 ,{"GuidelineId":"0210","PageId":"2367452307"}
 ,{"GuidelineId":"0211","PageId":"2367452069"}
 ,{"GuidelineId":"0212","PageId":"2367452071"}
 ,{"GuidelineId":"0213","PageId":"2367452076"}
 ,{"GuidelineId":"0214","PageId":"2367452082"}
 ,{"GuidelineId":"0219","PageId":"2632950244"}
];

GuidelineN.guidelineIdToPageIdList = {
  "0003":"2367451859"
 ,"0004":"2367451861"
 ,"0008":"2367451868"
 ,"0049":"2367451870"
 ,"0111":"2367451874"
 ,"0079":"2367451876"
 ,"0203":"2367451880"
 ,"0130":"2367451884"
 ,"0158":"2367451886"
 ,"0154":"2367451890"
 ,"0155":"2367451892"
 ,"0159":"2367451894"
 ,"0165":"2367451898"
 ,"0195":"2367451900"
 ,"0166":"2367451906"
 ,"0193":"2367451910"
 ,"0194":"2367451912"
 ,"0133":"2367451918"
 ,"0006":"2367451924"
 ,"0042":"2367451926"
 ,"0010":"2367451930"
 ,"0044":"2367451932"
 ,"0050":"2367451936"
 ,"0094":"2367451938"
 ,"0138":"2367451942"
 ,"0139":"2367451944"
 ,"0162":"2367451946"
 ,"0011":"2367451952"
 ,"0012":"2367451954"
 ,"0013":"2367451956"
 ,"0147":"2367451960"
 ,"0148":"2367451962"
 ,"0151":"2367451964"
 ,"0152":"2367451966"
 ,"0098":"2367451972"
 ,"0099":"2367451977"
 ,"0100":"2367451984"
 ,"0096":"2367452006"
 ,"0097":"2367452010"
 ,"0172":"2367452044"
 ,"0173":"2367452046"
 ,"0180":"2367452052"
 ,"0181":"2367452060"
 ,"0211":"2367452069"
 ,"0212":"2367452071"
 ,"0213":"2367452076"
 ,"0214":"2367452082"
 ,"0183":"2367452096"
 ,"0184":"2367452100"
 ,"0185":"2367452104"
 ,"0186":"2367452113"
 ,"0187":"2367452123"
 ,"0201":"2367452126"
 ,"0205":"2367452128"
 ,"0101":"2367452144"
 ,"0219":"2632950244"
 ,"0160":"2367452168"
 ,"0120":"2367452184"
 ,"0121":"2367452186"
 ,"0122":"2367452190"
 ,"0196":"2367452192"
 ,"0144":"2367452194"
 ,"0134":"2367452196"
 ,"0135":"2367452201"
 ,"0175":"2367452203"
 ,"0112":"2367452207"
 ,"0024":"2367452211"
 ,"0026":"2367452213"
 ,"0027":"2367452215"
 ,"0028":"2367452182"
 ,"0029":"2367452217"
 ,"0031":"2367452219"
 ,"0033":"2367452221"
 ,"0110":"2367452223"
 ,"0145":"2367452225"
 ,"0150":"2367452227"
 ,"0197":"2367452233"
 ,"0137":"2367452237"
 ,"0035":"2367452241"
 ,"0117":"2367452243"
 ,"0190":"2367452245"
 ,"0191":"2367452248"
 ,"0206":"2367452252"
 ,"0207":"2367452255"
 ,"0036":"2367452260"
 ,"0136":"2367452262"
 ,"0140":"2367452266"
 ,"0202":"2367452268"
 ,"0198":"2367452272"
 ,"0167":"2367452229"
 ,"0182":"2367452231"
 ,"0153":"2367452278"
 ,"0199":"2367452280"
 ,"0168":"2367452282"
 ,"0169":"2367452284"
 ,"0176":"2367452286"
 ,"0208":"2367452288"
 ,"0209":"2367452290"
 ,"0156":"2367452295"
 ,"0188":"2367452297"
 ,"0163":"2367452303"
 ,"0170":"2367452305"
 ,"0210":"2367452307"
 ,"0069":"2367452313"
 ,"0075":"2367452315"
 ,"0076":"2367452317"
 ,"0123":"2367452323"
 ,"0053":"2367452325"
 ,"0124":"2367452331"
 ,"0200":"2367452333"
 ,"0204":"2367452335"
 ,"0146":"2367452339"
 ,"0132":"2367452341"
 ,"0164":"2367452343"
 ,"0161":"2367452345"
 ,"0189":"2367452347"
 ,"0171":"2367452351"
 ,"0177":"2367452353"
 ,"0178":"2367452355"
 ,"0125":"2367452361"
 ,"0126":"2367452363"
 ,"0083":"2367452369"
 ,"0118":"2367452371"
 ,"0192":"2367452375"
 ,"0063":"2367452379"
 ,"0055":"2367452381"
 ,"0067":"2367452383"
 ,"0056":"2367452385"
 ,"0093":"2367452387"
 ,"0057":"2367452389"
 ,"0059":"2367452391"
 ,"0119":"2367452393"
};

GuidelineN.guidelineComponentList = [
  {"pageid":"2367451855","name":"System features"
   ,"list":["0003","0004","0008","0049","0111","0079","0203","0130","0158","0154","0155","0159","0165","0195","0166","0193","0194"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-nex":"1","function-プレイ情報":"1","function-クラッシュレポート":"1","function-eコマース":"1","function-画面焼け":"1","function-npln":"1","function-事前承認が必要":"1","function-撮影機能":"1","function-システムチック":"1","function-nintendoswitchonline":"1","function-アラーム":"1","function-自動スリープ":"1","function-ugc":"1","function-irセンサー":"1","function-個人情報":"1","function-パッチ":"1","function-ローカル通信":"1","function-すべてのアプリケーション":"1","function-他人が権利を保有するコンテンツ":"1","function-使用許可制api":"1","function-テレビ表示":"1","function-bcat":"1","function-カメラ":"1","function-アカウント":"1","function-エラー表示":"1","function-エラーハンドリング":"1","function-インターネット通信":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-4.0":"1","revision-updated-13.1":"1","revision-updated-21.0":"1","revision-updated-1.1":"1","revision-updated-16.1":"1","revision-updated-17.0":"1","revision-updated-14.0":"1","revision-updated-3.1":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-5.1":"1","revision-updated-1.0":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-6.0":"1","revision-updated-12.0":"1","revision-updated-0.7":"1","revision-updated-5.2":"1","revision-updated-10.0":"1","revision-updated-0.6":"1","revision-updated-8.0":"1","revision-updated-0.4":"1","revision-updated-16.0":"1","revision-updated-0.2":"1"}
  }
 ,{"pageid":"2367451914","name":"Hardware"
   ,"list":["0133","0006","0042","0010","0044","0050","0094","0138","0139","0162"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-画面焼け":"1","function-加速度センサー":"1","function-ジャイロセンサー":"1","function-すべてのアプリケーション":"1","function-マイク":"1","function-デバイスの着脱":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-21.0":"1","revision-updated-19.0":"1","revision-updated-0.8":"1","revision-updated-14.0":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-20240325":"1","revision-updated-0.7":"1","revision-updated-0.6":"1","revision-updated-8.0":"1","revision-updated-0.4":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367451948","name":"File system"
   ,"list":["0011","0012","0013","0147","0148","0151","0152"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-違反件数が多い":"1","function-nintendoswitchonline":"1","function-ファイルシステム":"1","function-アカウント":"1","function-すべてのアプリケーション":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-20240626":"1","revision-updated-21.0":"1","revision-updated-1.1":"1","revision-updated-0.2":"1","revision-updated-17.0":"1","revision-updated-3.1":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-0.7":"1","revision-updated-10.0":"1","revision-updated-4.0":"1","revision-updated-0.6":"1","revision-updated-0.5":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-16.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367451968","name":"Safety"
   ,"list":["0098","0099","0100","0096","0097","0172","0173","0180","0181","0211","0212","0213","0214"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-vr":"1","function-事前承認が必要":"1","function-レッグバンド":"1","function-振り回し":"1","function-toycon":"1"}
   ,"revision-taglist":{"revision-updated-20240626":"1","revision-updated-21.0":"1","revision-updated-19.0":"1","revision-updated-10.0":"1","revision-updated-0.8":"1","revision-updated-17.0":"1","revision-updated-14.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-11.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-15.0":"1","revision-updated-18.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452090","name":"VR"
   ,"list":["0183","0184","0185","0186","0187","0201","0205"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-vr":"1","function-振り回し":"1","function-toycon":"1","function-ペアレンタルコントロール":"1"}
   ,"revision-taglist":{"revision-updated-20240206":"1","revision-updated-11.0":"1","revision-updated-15.0":"1","revision-updated-18.0":"1"}
  }
 ,{"pageid":"2367452134","name":"Play modes"
   ,"list":["0101","0219","0160"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-加速度センサー":"1","function-違反件数が多い":"1","function-プレイモード切り替え":"1","function-ジャイロセンサー":"1","function-振り回し":"1","function-タッチスクリーン":"1","function-すべてのアプリケーション":"1","function-デバイスの着脱":"1"}
   ,"revision-taglist":{"revision-updated-1.1":"1","revision-updated-0.8":"1","revision-updated-17.0":"1","revision-updated-20240206":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-12.0":"1","revision-updated-16.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452178","name":"Communication features"
   ,"list":["0120","0121","0122","0196","0144","0134","0135","0175","0112","0024","0026","0027","0028","0029","0031","0033","0110","0145","0150","0197","0137","0035","0117","0190","0191","0206","0207","0036","0136","0140","0202","0198","0167","0182"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-nex":"1","function-omas":"1","function-体験版":"1","function-ニンテンドーアカウントの認可リクエスト":"1","function-違反件数が多い":"1","function-プレイレポート":"1","function-lan内通信":"1","function-事前承認が必要":"1","function-クロスプラットフォーム":"1","function-nexデータストア":"1","function-フレンドライブラリ":"1","function-個人情報":"1","function-独自サーバー":"1","function-マッチメイクボイスチャット":"1","function-bcat":"1","function-アカウント":"1","function-ローカル通信":"1","function-広告表示":"1","function-npln":"1","function-エラー表示":"1","function-エラーハンドリング":"1","function-インターネット通信":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-10.1":"1","revision-updated-3.1":"1","revision-updated-19.0":"1","revision-updated-20.0":"1","revision-updated-10.0":"1","revision-updated-3.2":"1","revision-updated-0.4":"1","revision-updated-0.7":"1","revision-updated-17.0":"1","revision-updated-1.1":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","revision-updated-21.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-18.0":"1","revision-updated-12.0":"1","revision-updated-13.0":"1","revision-updated-4.0":"1","revision-updated-0.6":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-16.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452274","name":"Accounts"
   ,"list":["0153","0199","0168","0169","0176","0208","0209","0156","0188"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-違反件数が多い":"1","function-フレンドライブラリ":"1","function-ニンテンドーアカウントの認可リクエスト":"1","function-ugc":"1","function-アカウント":"1"}
   ,"revision-taglist":{"revision-updated-13.0":"1","revision-updated-19.0":"1","revision-updated-19.1":"1","revision-updated-5.2":"1","revision-updated-12.0":"1","revision-updated-14.0":"1","revision-updated-21.0":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452299","name":"Nintendo Switch Online"
   ,"list":["0163","0170","0210"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-nex":"1","function-nintendoswitchonline":"1","function-独自サーバー":"1","function-マッチメイクボイスチャット":"1","function-npln":"1"}
   ,"revision-taglist":{"revision-updated-21.0":"1","revision-updated-20.0":"1","revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-15.0":"1","revision-updated-12.0":"1","revision-updated-13.0":"1","revision-updated-8.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452309","name":"UGC"
   ,"list":["0069","0075","0076"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-ugc":"1","function-irセンサー":"1","function-ペアレンタルコントロール":"1"}
   ,"revision-taglist":{"revision-updated-21.0":"1","revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-0.5":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-0.7":"1","revision-updated-0.6":"1","revision-updated-9.0":"1"}
  }
 ,{"pageid":"2367452319","name":"Patches"
   ,"list":["0123","0053"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-違反件数が多い":"1","function-パッチ":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-20240626":"1","revision-updated-13.0":"1","revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-12.0":"1","revision-updated-18.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452327","name":"E-commerce"
   ,"list":["0124","0200","0204","0146","0132","0164","0161","0189","0171","0177","0178"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-eコマース":"1","function-独自サーバー":"1","function-エラー表示":"1"}
   ,"revision-taglist":{"revision-updated-4.0":"1","revision-updated-19.0":"1","revision-updated-1.1":"1","revision-updated-17.0":"1","revision-updated-9.0":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","revision-updated-5.2":"1","revision-updated-20240206":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-15.0":"1","revision-updated-12.0":"1","revision-updated-18.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-16.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452357","name":"Demos"
   ,"list":["0125","0126"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-体験版":"1"}
   ,"revision-taglist":{"revision-updated-13.0":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-12.0":"1","revision-updated-9.0":"1","revision-updated-6.0":"1"}
  }
 ,{"pageid":"2367452365","name":"Other"
   ,"list":["0083","0118","0192","0063","0055","0067","0056","0093","0057","0059","0119"]
   ,"reader-taglist":{}
   ,"function-taglist":{"function-違反件数が多い":"1","function-素材集":"1","function-nfp":"1","function-事前承認が必要":"1","function-ugc":"1","function-すべてのアプリケーション":"1","function-広告表示":"1","function-china_region":"1","function-テキスト表示":"1"}
   ,"revision-taglist":{"revision-updated-0.3":"1","revision-updated-20240626":"1","revision-updated-20240325":"1","revision-updated-19.0":"1","revision-updated-13.0":"1","revision-updated-1.1":"1","revision-updated-5.2":"1","revision-updated-17.0":"1","revision-updated-14.0":"1","revision-updated-21.0":"1","revision-updated-7.0":"1","revision-updated-20240206":"1","revision-updated-0.2":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-2.0":"1","revision-updated-0.7":"1","revision-updated-4.0":"1","revision-updated-0.4":"1","revision-updated-16.0":"1","revision-updated-6.0":"1"}
  }
];

GuidelineN.guidelineIdToTagList = {
  "0003":{"revision-updated-0.3":"1","function-テレビ表示":"1","function-すべてのアプリケーション":"1"}
 ,"0004":{"revision-updated-12.0":"1","revision-updated-21.0":"1","revision-updated-1.0":"1","function-画面焼け":"1","revision-updated-5.0":"1","function-テレビ表示":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-0.2":"1","revision-updated-2.0":"1","revision-updated-0.4":"1"}
 ,"0008":{"revision-updated-20240206":"1","function-他人が権利を保有するコンテンツ":"1","revision-updated-6.0":"1","revision-updated-1.0":"1","function-撮影機能":"1","revision-updated-5.0":"1","revision-updated-0.7":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-14.0":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-0.6":"1"}
 ,"0049":{"revision-updated-20240206":"1","function-irセンサー":"1","revision-updated-5.0":"1","revision-updated-1.0":"1","revision-updated-0.7":"1","function-撮影機能":"1","revision-updated-18.0":"1","function-カメラ":"1","revision-updated-0.3":"1","function-ugc":"1","revision-updated-14.0":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-0.6":"1"}
 ,"0111":{"revision-updated-1.1":"1","revision-updated-1.0":"1","revision-updated-3.0":"1","function-エラーハンドリング":"1","revision-updated-2.0":"1","function-エラー表示":"1"}
 ,"0079":{"revision-updated-3.0":"1","revision-updated-5.0":"1","revision-updated-7.0":"1","revision-updated-17.0":"1","function-パッチ":"1","revision-updated-14.0":"1","revision-updated-0.7":"1","revision-updated-20240206":"1","revision-updated-2.0":"1","function-nex":"1","function-bcat":"1","function-エラーハンドリング":"1","revision-updated-16.0":"1","revision-updated-16.1":"1","function-ローカル通信":"1","revision-updated-4.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-10.0":"1","function-npln":"1","function-エラー表示":"1","revision-updated-21.0":"1","revision-updated-20240325":"1","function-インターネット通信":"1","function-アカウント":"1","revision-updated-1.0":"1","revision-updated-3.1":"1"}
 ,"0203":{"function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-16.0":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","function-eコマース":"1"}
 ,"0130":{"function-自動スリープ":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-2.0":"1","function-使用許可制api":"1","revision-updated-20240325":"1"}
 ,"0158":{"function-自動スリープ":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","function-使用許可制api":"1"}
 ,"0154":{"revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-20240206":"1","revision-updated-5.1":"1","revision-updated-5.2":"1"}
 ,"0155":{"revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-5.2":"1"}
 ,"0159":{"function-個人情報":"1","revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-20240206":"1"}
 ,"0165":{"revision-updated-7.0":"1","function-プレイ情報":"1"}
 ,"0195":{"revision-updated-14.0":"1","function-事前承認が必要":"1","function-プレイ情報":"1"}
 ,"0166":{"function-システムチック":"1","revision-updated-21.0":"1","revision-updated-7.0":"1"}
 ,"0193":{"revision-updated-13.1":"1","function-アラーム":"1","revision-updated-15.0":"1"}
 ,"0194":{"revision-updated-13.1":"1","function-アラーム":"1"}
 ,"0133":{"revision-updated-6.0":"1","function-画面焼け":"1","revision-updated-3.0":"1","revision-updated-20240325":"1"}
 ,"0006":{"revision-updated-14.0":"1","revision-updated-0.3":"1","function-加速度センサー":"1"}
 ,"0042":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-0.3":"1","function-加速度センサー":"1","revision-updated-0.7":"1"}
 ,"0010":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-0.3":"1","function-ジャイロセンサー":"1"}
 ,"0044":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","function-ジャイロセンサー":"1"}
 ,"0050":{"function-デバイスの着脱":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-0.6":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1"}
 ,"0094":{"function-デバイスの着脱":"1","revision-updated-3.0":"1","revision-updated-0.8":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1"}
 ,"0138":{"revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","function-マイク":"1","revision-updated-19.0":"1"}
 ,"0139":{"revision-updated-21.0":"1","revision-updated-6.0":"1","revision-updated-7.0":"1","function-マイク":"1"}
 ,"0162":{"revision-updated-6.0":"1","revision-updated-8.0":"1","function-マイク":"1"}
 ,"0011":{"revision-updated-20240206":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","revision-updated-3.1":"1","function-違反件数が多い":"1","revision-updated-0.5":"1","revision-updated-1.0":"1","revision-updated-9.0":"1","revision-updated-0.3":"1","revision-updated-3.0":"1","revision-updated-0.6":"1","revision-updated-1.1":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-16.0":"1"}
 ,"0012":{"revision-updated-2.0":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-3.1":"1","revision-updated-7.0":"1","revision-updated-10.0":"1","revision-updated-0.5":"1","revision-updated-1.0":"1","revision-updated-5.0":"1","revision-updated-0.7":"1","function-すべてのアプリケーション":"1","revision-updated-3.0":"1","revision-updated-0.6":"1","revision-updated-4.0":"1","revision-updated-1.1":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-16.0":"1"}
 ,"0013":{"function-ファイルシステム":"1","revision-updated-0.2":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1","revision-updated-9.0":"1"}
 ,"0147":{"function-ファイルシステム":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-5.0":"1"}
 ,"0148":{"function-ファイルシステム":"1","revision-updated-4.0":"1","function-すべてのアプリケーション":"1"}
 ,"0151":{"function-ファイルシステム":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-18.0":"1","function-アカウント":"1"}
 ,"0152":{"function-ファイルシステム":"1","function-nintendoswitchonline":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1"}
 ,"0098":{"revision-updated-1.0":"1","function-振り回し":"1","revision-updated-7.0":"1","revision-updated-17.0":"1","revision-updated-0.8":"1"}
 ,"0099":{"revision-updated-10.0":"1","revision-updated-8.0":"1","revision-updated-1.0":"1","function-振り回し":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","revision-updated-0.8":"1","revision-updated-15.0":"1","revision-updated-7.0":"1"}
 ,"0100":{"revision-updated-20240206":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-1.0":"1","revision-updated-10.0":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-19.0":"1","revision-updated-8.0":"1","revision-updated-4.0":"1","revision-updated-3.0":"1","function-振り回し":"1","revision-updated-0.8":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"0096":{"revision-updated-1.0":"1","function-振り回し":"1","revision-updated-20240206":"1","revision-updated-0.8":"1","revision-updated-7.0":"1"}
 ,"0097":{"revision-updated-10.0":"1","revision-updated-1.0":"1","revision-updated-8.0":"1","revision-updated-14.0":"1","function-振り回し":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.8":"1","revision-updated-7.0":"1"}
 ,"0172":{"revision-updated-8.0":"1","revision-updated-11.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-19.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0173":{"revision-updated-10.0":"1","function-振り回し":"1","revision-updated-8.0":"1","revision-updated-19.0":"1","function-toycon":"1"}
 ,"0180":{"revision-updated-10.0":"1","revision-updated-21.0":"1","revision-updated-11.0":"1","revision-updated-19.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0181":{"revision-updated-10.0":"1","revision-updated-19.0":"1","function-toycon":"1"}
 ,"0211":{"function-事前承認が必要":"1","revision-updated-20240206":"1","function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"0212":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"0213":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"0214":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"0183":{"function-ペアレンタルコントロール":"1","revision-updated-11.0":"1","revision-updated-20240206":"1","function-vr":"1","function-toycon":"1"}
 ,"0184":{"revision-updated-11.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0185":{"revision-updated-11.0":"1","function-振り回し":"1","function-vr":"1","function-toycon":"1"}
 ,"0186":{"revision-updated-11.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0187":{"revision-updated-11.0":"1","revision-updated-20240206":"1","function-vr":"1","function-toycon":"1"}
 ,"0201":{"revision-updated-15.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0205":{"revision-updated-20240206":"1","revision-updated-18.0":"1","function-vr":"1","function-toycon":"1"}
 ,"0101":{"revision-updated-1.1":"1","function-デバイスの着脱":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-0.8":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1","function-プレイモード切り替え":"1"}
 ,"0219":{"function-デバイスの着脱":"1","function-振り回し":"1","revision-updated-20240206":"1","function-ジャイロセンサー":"1","function-加速度センサー":"1","function-タッチスクリーン":"1","function-プレイモード切り替え":"1"}
 ,"0160":{"revision-updated-6.0":"1","revision-updated-12.0":"1","function-違反件数が多い":"1","revision-updated-16.0":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","function-プレイモード切り替え":"1"}
 ,"0120":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","revision-updated-2.0":"1"}
 ,"0121":{"revision-updated-20240206":"1","revision-updated-2.0":"1","revision-updated-17.0":"1","revision-updated-4.0":"1","revision-updated-12.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","function-アカウント":"1","function-マッチメイクボイスチャット":"1","function-npln":"1","revision-updated-9.0":"1","function-フレンドライブラリ":"1","revision-updated-7.0":"1","revision-updated-10.1":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","function-インターネット通信":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-6.0":"1"}
 ,"0122":{"revision-updated-6.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","revision-updated-18.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","revision-updated-13.0":"1","revision-updated-4.0":"1","revision-updated-2.0":"1","revision-updated-3.1":"1","revision-updated-21.0":"1"}
 ,"0196":{"revision-updated-14.0":"1","function-インターネット通信":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1"}
 ,"0144":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-13.0":"1","revision-updated-4.0":"1"}
 ,"0134":{"revision-updated-8.0":"1","function-インターネット通信":"1","function-違反件数が多い":"1","revision-updated-16.0":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","revision-updated-17.0":"1","function-エラーハンドリング":"1","function-エラー表示":"1"}
 ,"0135":{"revision-updated-8.0":"1","revision-updated-3.1":"1","revision-updated-21.0":"1","function-インターネット通信":"1","revision-updated-3.0":"1","function-エラーハンドリング":"1","revision-updated-5.0":"1","function-アカウント":"1","revision-updated-4.0":"1","function-エラー表示":"1"}
 ,"0175":{"function-インターネット通信":"1","revision-updated-8.0":"1","function-広告表示":"1"}
 ,"0112":{"revision-updated-20240206":"1","function-インターネット通信":"1","revision-updated-17.0":"1","function-個人情報":"1","function-nex":"1","revision-updated-1.0":"1","function-npln":"1","revision-updated-8.0":"1","revision-updated-14.0":"1","function-プレイレポート":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-16.0":"1"}
 ,"0024":{"revision-updated-20240206":"1","revision-updated-1.0":"1","revision-updated-10.0":"1","revision-updated-0.3":"1","revision-updated-9.0":"1","revision-updated-8.0":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-0.4":"1","revision-updated-3.0":"1","revision-updated-6.0":"1","function-nex":"1","function-インターネット通信":"1","revision-updated-16.0":"1"}
 ,"0026":{"revision-updated-10.0":"1","revision-updated-1.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","function-nex":"1","revision-updated-0.7":"1"}
 ,"0027":{"revision-updated-10.0":"1","revision-updated-12.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-0.6":"1","function-nex":"1","revision-updated-4.0":"1"}
 ,"0028":{"revision-updated-10.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","function-nex":"1","revision-updated-4.0":"1","revision-updated-1.0":"1","revision-updated-9.0":"1"}
 ,"0029":{"function-nexデータストア":"1","function-インターネット通信":"1","revision-updated-13.0":"1","revision-updated-15.0":"1","function-nex":"1","revision-updated-0.4":"1","function-omas":"1"}
 ,"0031":{"function-nexデータストア":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","revision-updated-0.3":"1","function-nex":"1","function-omas":"1"}
 ,"0033":{"revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-12.0":"1","function-インターネット通信":"1","revision-updated-5.0":"1","revision-updated-0.3":"1","revision-updated-0.6":"1","function-nex":"1","revision-updated-0.7":"1"}
 ,"0110":{"revision-updated-2.0":"1","revision-updated-14.0":"1","revision-updated-15.0":"1","function-nex":"1","revision-updated-7.0":"1","function-omas":"1"}
 ,"0145":{"revision-updated-4.0":"1","function-体験版":"1","function-nex":"1"}
 ,"0150":{"revision-updated-10.0":"1","revision-updated-12.0":"1","revision-updated-8.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-5.0":"1","function-nex":"1"}
 ,"0197":{"revision-updated-14.0":"1","function-nex":"1"}
 ,"0137":{"revision-updated-3.1":"1","function-インターネット通信":"1","function-bcat":"1"}
 ,"0035":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-1.1":"1"}
 ,"0117":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1"}
 ,"0190":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"0191":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"0206":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"0207":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1"}
 ,"0036":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","function-クロスプラットフォーム":"1","revision-updated-16.0":"1","revision-updated-2.0":"1","function-omas":"1","revision-updated-4.0":"1"}
 ,"0136":{"revision-updated-10.0":"1","revision-updated-3.1":"1","function-クロスプラットフォーム":"1","function-lan内通信":"1","revision-updated-9.0":"1"}
 ,"0140":{"revision-updated-4.0":"1","revision-updated-3.2":"1","function-ローカル通信":"1"}
 ,"0202":{"function-インターネット通信":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-15.0":"1","function-ローカル通信":"1"}
 ,"0198":{"revision-updated-14.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1","function-lan内通信":"1"}
 ,"0167":{"revision-updated-21.0":"1","revision-updated-7.0":"1","function-nex":"1"}
 ,"0182":{"function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-21.0":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","function-nex":"1","function-npln":"1"}
 ,"0153":{"revision-updated-6.0":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","function-アカウント":"1"}
 ,"0199":{"revision-updated-14.0":"1","revision-updated-15.0":"1","function-アカウント":"1"}
 ,"0168":{"revision-updated-8.0":"1","revision-updated-7.0":"1","function-アカウント":"1"}
 ,"0169":{"revision-updated-7.0":"1","function-アカウント":"1"}
 ,"0176":{"revision-updated-20.0":"1","revision-updated-21.0":"1","revision-updated-19.1":"1","revision-updated-8.0":"1","revision-updated-15.0":"1","function-アカウント":"1","revision-updated-9.0":"1"}
 ,"0208":{"function-違反件数が多い":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","revision-updated-20240325":"1"}
 ,"0209":{"revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"0156":{"revision-updated-8.0":"1","function-フレンドライブラリ":"1","revision-updated-5.2":"1","revision-updated-9.0":"1"}
 ,"0188":{"revision-updated-12.0":"1","function-ugc":"1","function-フレンドライブラリ":"1"}
 ,"0163":{"revision-updated-20240206":"1","revision-updated-6.0":"1","revision-updated-14.0":"1","function-npln":"1","function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","function-nintendoswitchonline":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"0170":{"revision-updated-20240206":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","function-マッチメイクボイスチャット":"1","function-npln":"1","function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","revision-updated-20.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1"}
 ,"0210":{"revision-updated-20.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-18.0":"1","function-npln":"1"}
 ,"0069":{"function-ペアレンタルコントロール":"1","revision-updated-21.0":"1","function-ugc":"1","revision-updated-5.0":"1","revision-updated-0.5":"1","revision-updated-0.6":"1"}
 ,"0075":{"function-ugc":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-0.6":"1","revision-updated-0.7":"1","revision-updated-2.0":"1"}
 ,"0076":{"revision-updated-14.0":"1","function-ugc":"1","revision-updated-0.7":"1","revision-updated-0.6":"1","function-irセンサー":"1"}
 ,"0123":{"revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","function-パッチ":"1","revision-updated-13.0":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1","revision-updated-2.0":"1","revision-updated-6.0":"1","revision-updated-9.0":"1"}
 ,"0053":{"revision-updated-12.0":"1","function-パッチ":"1","function-違反件数が多い":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1"}
 ,"0124":{"revision-updated-2.0":"1","function-eコマース":"1"}
 ,"0200":{"revision-updated-14.0":"1","revision-updated-17.0":"1","function-eコマース":"1"}
 ,"0204":{"revision-updated-16.0":"1","function-eコマース":"1"}
 ,"0146":{"revision-updated-4.0":"1","revision-updated-16.0":"1","revision-updated-17.0":"1","revision-updated-19.0":"1","function-eコマース":"1"}
 ,"0132":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-4.0":"1","revision-updated-3.0":"1","revision-updated-5.0":"1","function-eコマース":"1","revision-updated-5.2":"1","function-エラー表示":"1"}
 ,"0164":{"revision-updated-6.0":"1","revision-updated-8.0":"1","function-eコマース":"1","function-エラー表示":"1"}
 ,"0161":{"function-独自サーバー":"1","revision-updated-6.0":"1","revision-updated-7.0":"1","function-eコマース":"1"}
 ,"0189":{"revision-updated-12.0":"1","revision-updated-14.0":"1","revision-updated-16.0":"1","function-eコマース":"1"}
 ,"0171":{"revision-updated-14.0":"1","revision-updated-7.0":"1","function-eコマース":"1"}
 ,"0177":{"function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","revision-updated-14.0":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1","function-eコマース":"1","revision-updated-8.0":"1","revision-updated-9.0":"1"}
 ,"0178":{"revision-updated-17.0":"1","revision-updated-8.0":"1","revision-updated-16.0":"1","revision-updated-18.0":"1","function-eコマース":"1","revision-updated-9.0":"1"}
 ,"0125":{"function-体験版":"1","revision-updated-2.0":"1","revision-updated-9.0":"1"}
 ,"0126":{"revision-updated-6.0":"1","revision-updated-12.0":"1","revision-updated-13.0":"1","revision-updated-5.0":"1","function-体験版":"1","revision-updated-2.0":"1"}
 ,"0083":{"function-テキスト表示":"1","function-違反件数が多い":"1","revision-updated-1.1":"1","revision-updated-20240206":"1","revision-updated-0.7":"1","function-すべてのアプリケーション":"1"}
 ,"0118":{"revision-updated-1.1":"1","revision-updated-20240626":"1","revision-updated-4.0":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","revision-updated-2.0":"1","revision-updated-19.0":"1","function-広告表示":"1","revision-updated-20240325":"1"}
 ,"0192":{"revision-updated-13.0":"1","revision-updated-14.0":"1","function-ugc":"1","revision-updated-17.0":"1","function-china_region":"1"}
 ,"0063":{"revision-updated-0.4":"1","function-nfp":"1"}
 ,"0055":{"revision-updated-0.3":"1","function-nfp":"1"}
 ,"0067":{"revision-updated-0.4":"1","revision-updated-21.0":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","function-nfp":"1"}
 ,"0056":{"revision-updated-1.1":"1","revision-updated-3.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.3":"1","revision-updated-0.7":"1","revision-updated-2.0":"1","function-nfp":"1"}
 ,"0093":{"function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.7":"1","function-nfp":"1"}
 ,"0057":{"revision-updated-1.1":"1","revision-updated-0.4":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","function-nfp":"1"}
 ,"0059":{"revision-updated-6.0":"1","revision-updated-16.0":"1","revision-updated-0.3":"1","revision-updated-0.7":"1","function-nfp":"1","revision-updated-5.2":"1"}
 ,"0119":{"revision-updated-1.1":"1","function-素材集":"1","revision-updated-21.0":"1","function-nfp":"1"}
};

GuidelineN.pageIdToTagList = {
  "2367451833":{"revision-updated-0.4":"1","revision-updated-3.1":"1","revision-updated-0.7":"1","revision-updated-1.1":"1","revision-updated-20240325":"1","revision-updated-6.0":"1","revision-updated-3.0":"1","revision-updated-20240206":"1","revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-13.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","revision-updated-2.0":"1","revision-updated-21.0":"1","revision-updated-10.0":"1"}
 ,"2367451859":{"revision-updated-0.3":"1","function-テレビ表示":"1","function-すべてのアプリケーション":"1"}
 ,"2367451861":{"revision-updated-12.0":"1","revision-updated-21.0":"1","revision-updated-1.0":"1","function-画面焼け":"1","revision-updated-5.0":"1","function-テレビ表示":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-0.2":"1","revision-updated-2.0":"1","revision-updated-0.4":"1"}
 ,"2367451857":{"function-テレビ表示":"1","revision-updated-0.4":"1","revision-updated-5.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-12.0":"1","function-画面焼け":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1","revision-updated-0.2":"1","revision-updated-21.0":"1"}
 ,"2367451868":{"revision-updated-20240206":"1","function-他人が権利を保有するコンテンツ":"1","revision-updated-6.0":"1","revision-updated-1.0":"1","function-撮影機能":"1","revision-updated-5.0":"1","revision-updated-0.7":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-14.0":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-0.6":"1"}
 ,"2367451870":{"revision-updated-20240206":"1","function-irセンサー":"1","revision-updated-5.0":"1","revision-updated-1.0":"1","revision-updated-0.7":"1","function-撮影機能":"1","revision-updated-18.0":"1","function-カメラ":"1","revision-updated-0.3":"1","function-ugc":"1","revision-updated-14.0":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-0.6":"1"}
 ,"2367451866":{"function-irセンサー":"1","revision-updated-6.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-18.0":"1","revision-updated-14.0":"1","function-他人が権利を保有するコンテンツ":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","function-ugc":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-0.4":"1","function-撮影機能":"1","revision-updated-0.6":"1","function-カメラ":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"2367451874":{"revision-updated-1.1":"1","revision-updated-1.0":"1","revision-updated-3.0":"1","function-エラーハンドリング":"1","revision-updated-2.0":"1","function-エラー表示":"1"}
 ,"2367451876":{"revision-updated-3.0":"1","revision-updated-5.0":"1","revision-updated-7.0":"1","revision-updated-17.0":"1","function-パッチ":"1","revision-updated-14.0":"1","revision-updated-0.7":"1","revision-updated-20240206":"1","revision-updated-2.0":"1","function-nex":"1","function-bcat":"1","function-エラーハンドリング":"1","revision-updated-16.0":"1","revision-updated-16.1":"1","function-ローカル通信":"1","revision-updated-4.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-10.0":"1","function-npln":"1","function-エラー表示":"1","revision-updated-21.0":"1","revision-updated-20240325":"1","function-インターネット通信":"1","function-アカウント":"1","revision-updated-1.0":"1","revision-updated-3.1":"1"}
 ,"2367451872":{"revision-updated-1.0":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","function-パッチ":"1","function-エラー表示":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","revision-updated-16.1":"1","revision-updated-20240325":"1","revision-updated-1.1":"1","revision-updated-14.0":"1","function-エラーハンドリング":"1","function-アカウント":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-17.0":"1","function-ローカル通信":"1","function-インターネット通信":"1","revision-updated-3.1":"1","function-nex":"1","function-bcat":"1","function-npln":"1"}
 ,"2367451880":{"function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-16.0":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","function-eコマース":"1"}
 ,"2367451878":{"revision-updated-17.0":"1","revision-updated-20240206":"1","revision-updated-16.0":"1","function-nintendoswitchonline":"1","function-eコマース":"1","revision-updated-21.0":"1"}
 ,"2367451884":{"function-自動スリープ":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-2.0":"1","function-使用許可制api":"1","revision-updated-20240325":"1"}
 ,"2367451886":{"function-自動スリープ":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","function-使用許可制api":"1"}
 ,"2367451882":{"function-事前承認が必要":"1","revision-updated-20240325":"1","revision-updated-6.0":"1","function-自動スリープ":"1","function-使用許可制api":"1","revision-updated-2.0":"1","revision-updated-20240206":"1"}
 ,"2367451890":{"revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-20240206":"1","revision-updated-5.1":"1","revision-updated-5.2":"1"}
 ,"2367451892":{"revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-5.2":"1"}
 ,"2367451894":{"function-個人情報":"1","revision-updated-6.0":"1","function-クラッシュレポート":"1","revision-updated-20240206":"1"}
 ,"2367451888":{"function-個人情報":"1","revision-updated-6.0":"1","revision-updated-5.2":"1","function-クラッシュレポート":"1","revision-updated-5.1":"1","revision-updated-20240206":"1"}
 ,"2367451898":{"revision-updated-7.0":"1","function-プレイ情報":"1"}
 ,"2367451900":{"revision-updated-14.0":"1","function-事前承認が必要":"1","function-プレイ情報":"1"}
 ,"2367451896":{"function-事前承認が必要":"1","revision-updated-7.0":"1","revision-updated-14.0":"1","function-プレイ情報":"1"}
 ,"2367451906":{"function-システムチック":"1","revision-updated-21.0":"1","revision-updated-7.0":"1"}
 ,"2367451904":{"revision-updated-7.0":"1","function-システムチック":"1","revision-updated-21.0":"1"}
 ,"2367451910":{"revision-updated-13.1":"1","function-アラーム":"1","revision-updated-15.0":"1"}
 ,"2367451912":{"revision-updated-13.1":"1","function-アラーム":"1"}
 ,"2367451908":{"function-アラーム":"1","revision-updated-15.0":"1","revision-updated-13.1":"1","revision-updated-20240206":"1"}
 ,"2367451855":{"revision-updated-5.1":"1","revision-updated-3.0":"1","revision-updated-1.1":"1","revision-updated-20240206":"1","revision-updated-16.0":"1","revision-updated-12.0":"1","function-システムチック":"1","function-カメラ":"1","function-npln":"1","function-他人が権利を保有するコンテンツ":"1","revision-updated-13.1":"1","function-ローカル通信":"1","revision-updated-4.0":"1","revision-updated-5.2":"1","revision-updated-1.0":"1","function-使用許可制api":"1","function-個人情報":"1","function-nex":"1","revision-updated-7.0":"1","revision-updated-15.0":"1","revision-updated-20240325":"1","revision-updated-0.2":"1","function-テレビ表示":"1","function-撮影機能":"1","function-bcat":"1","revision-updated-21.0":"1","revision-updated-8.0":"1","revision-updated-3.1":"1","revision-updated-2.0":"1","function-インターネット通信":"1","revision-updated-16.1":"1","revision-updated-0.6":"1","function-eコマース":"1","function-事前承認が必要":"1","function-クラッシュレポート":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","revision-updated-18.0":"1","revision-updated-0.3":"1","function-すべてのアプリケーション":"1","function-パッチ":"1","function-nintendoswitchonline":"1","function-画面焼け":"1","function-プレイ情報":"1","function-エラー表示":"1","revision-updated-5.0":"1","function-irセンサー":"1","revision-updated-0.7":"1","function-エラーハンドリング":"1","function-アラーム":"1","function-ugc":"1","revision-updated-17.0":"1","function-アカウント":"1","revision-updated-6.0":"1","revision-updated-0.4":"1","function-自動スリープ":"1"}
 ,"2367451918":{"revision-updated-6.0":"1","function-画面焼け":"1","revision-updated-3.0":"1","revision-updated-20240325":"1"}
 ,"2367451916":{"revision-updated-20240325":"1","revision-updated-6.0":"1","revision-updated-3.0":"1","function-画面焼け":"1"}
 ,"2367451924":{"revision-updated-14.0":"1","revision-updated-0.3":"1","function-加速度センサー":"1"}
 ,"2367451926":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-0.3":"1","function-加速度センサー":"1","revision-updated-0.7":"1"}
 ,"2367451922":{"revision-updated-0.4":"1","function-加速度センサー":"1","revision-updated-0.7":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-14.0":"1","revision-updated-0.3":"1"}
 ,"2367451930":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-0.3":"1","function-ジャイロセンサー":"1"}
 ,"2367451932":{"revision-updated-0.4":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","function-ジャイロセンサー":"1"}
 ,"2367451928":{"revision-updated-0.4":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-14.0":"1","revision-updated-0.3":"1","function-ジャイロセンサー":"1"}
 ,"2367451936":{"function-デバイスの着脱":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-0.6":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1"}
 ,"2367451938":{"function-デバイスの着脱":"1","revision-updated-3.0":"1","revision-updated-0.8":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1"}
 ,"2367451934":{"revision-updated-0.8":"1","revision-updated-3.0":"1","revision-updated-0.6":"1","function-デバイスの着脱":"1","revision-updated-0.3":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1"}
 ,"2367451942":{"revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","function-マイク":"1","revision-updated-19.0":"1"}
 ,"2367451944":{"revision-updated-21.0":"1","revision-updated-6.0":"1","revision-updated-7.0":"1","function-マイク":"1"}
 ,"2367451946":{"revision-updated-6.0":"1","revision-updated-8.0":"1","function-マイク":"1"}
 ,"2367451940":{"revision-updated-19.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-6.0":"1","function-マイク":"1","revision-updated-21.0":"1"}
 ,"2367451914":{"revision-updated-0.6":"1","revision-updated-6.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-21.0":"1","revision-updated-8.0":"1","function-加速度センサー":"1","revision-updated-14.0":"1","revision-updated-0.8":"1","revision-updated-20240325":"1","function-マイク":"1","function-デバイスの着脱":"1","revision-updated-19.0":"1","revision-updated-2.0":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-0.4":"1","function-ジャイロセンサー":"1","function-すべてのアプリケーション":"1","function-画面焼け":"1","revision-updated-3.0":"1"}
 ,"2367451952":{"revision-updated-20240206":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","revision-updated-3.1":"1","function-違反件数が多い":"1","revision-updated-0.5":"1","revision-updated-1.0":"1","revision-updated-9.0":"1","revision-updated-0.3":"1","revision-updated-3.0":"1","revision-updated-0.6":"1","revision-updated-1.1":"1","revision-updated-2.0":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-16.0":"1"}
 ,"2367451954":{"revision-updated-2.0":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-3.1":"1","revision-updated-7.0":"1","revision-updated-10.0":"1","revision-updated-0.5":"1","revision-updated-1.0":"1","revision-updated-5.0":"1","revision-updated-0.7":"1","function-すべてのアプリケーション":"1","revision-updated-3.0":"1","revision-updated-0.6":"1","revision-updated-4.0":"1","revision-updated-1.1":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-16.0":"1"}
 ,"2367451956":{"function-ファイルシステム":"1","revision-updated-0.2":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1","revision-updated-9.0":"1"}
 ,"2367451950":{"revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","function-違反件数が多い":"1","revision-updated-20240325":"1","revision-updated-0.5":"1","revision-updated-0.2":"1","revision-updated-20240626":"1","revision-updated-20240206":"1","function-すべてのアプリケーション":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-1.1":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","revision-updated-0.6":"1","revision-updated-3.1":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"2367451960":{"function-ファイルシステム":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-5.0":"1"}
 ,"2367451962":{"function-ファイルシステム":"1","revision-updated-4.0":"1","function-すべてのアプリケーション":"1"}
 ,"2367451964":{"function-ファイルシステム":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-18.0":"1","function-アカウント":"1"}
 ,"2367451966":{"function-ファイルシステム":"1","function-nintendoswitchonline":"1","revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1"}
 ,"2367451958":{"revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-4.0":"1","function-nintendoswitchonline":"1","function-アカウント":"1","function-ファイルシステム":"1","function-すべてのアプリケーション":"1","revision-updated-21.0":"1"}
 ,"2367451948":{"revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","function-違反件数が多い":"1","revision-updated-20240325":"1","revision-updated-0.5":"1","revision-updated-0.2":"1","function-nintendoswitchonline":"1","revision-updated-15.0":"1","revision-updated-20240206":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-1.1":"1","function-ファイルシステム":"1","revision-updated-17.0":"1","function-アカウント":"1","revision-updated-0.6":"1","revision-updated-3.1":"1","function-すべてのアプリケーション":"1","revision-updated-20240626":"1"}
 ,"2367451972":{"revision-updated-1.0":"1","function-振り回し":"1","revision-updated-7.0":"1","revision-updated-17.0":"1","revision-updated-0.8":"1"}
 ,"2367451977":{"revision-updated-10.0":"1","revision-updated-8.0":"1","revision-updated-1.0":"1","function-振り回し":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","revision-updated-0.8":"1","revision-updated-15.0":"1","revision-updated-7.0":"1"}
 ,"2367451984":{"revision-updated-20240206":"1","revision-updated-17.0":"1","revision-updated-20240626":"1","revision-updated-6.0":"1","revision-updated-1.0":"1","revision-updated-10.0":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-19.0":"1","revision-updated-8.0":"1","revision-updated-4.0":"1","revision-updated-3.0":"1","function-振り回し":"1","revision-updated-0.8":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"2367451970":{"revision-updated-19.0":"1","revision-updated-17.0":"1","function-事前承認が必要":"1","revision-updated-7.0":"1","function-振り回し":"1","revision-updated-20240206":"1","revision-updated-6.0":"1","revision-updated-0.8":"1","revision-updated-4.0":"1","revision-updated-1.0":"1","revision-updated-8.0":"1","revision-updated-18.0":"1","revision-updated-15.0":"1","revision-updated-20240626":"1","revision-updated-3.0":"1","revision-updated-21.0":"1","revision-updated-10.0":"1"}
 ,"2367452006":{"revision-updated-1.0":"1","function-振り回し":"1","revision-updated-20240206":"1","revision-updated-0.8":"1","revision-updated-7.0":"1"}
 ,"2367452010":{"revision-updated-10.0":"1","revision-updated-1.0":"1","revision-updated-8.0":"1","revision-updated-14.0":"1","function-振り回し":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.8":"1","revision-updated-7.0":"1"}
 ,"2367452004":{"function-事前承認が必要":"1","revision-updated-7.0":"1","function-振り回し":"1","revision-updated-10.0":"1","revision-updated-0.8":"1","revision-updated-14.0":"1","revision-updated-1.0":"1","revision-updated-8.0":"1","revision-updated-20240206":"1"}
 ,"2367452044":{"revision-updated-8.0":"1","revision-updated-11.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-19.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452046":{"revision-updated-10.0":"1","function-振り回し":"1","revision-updated-8.0":"1","revision-updated-19.0":"1","function-toycon":"1"}
 ,"2367452052":{"revision-updated-10.0":"1","revision-updated-21.0":"1","revision-updated-11.0":"1","revision-updated-19.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452060":{"revision-updated-10.0":"1","revision-updated-19.0":"1","function-toycon":"1"}
 ,"2367452025":{"revision-updated-19.0":"1","function-事前承認が必要":"1","revision-updated-8.0":"1","revision-updated-10.0":"1","revision-updated-21.0":"1","function-vr":"1","function-toycon":"1","function-振り回し":"1","revision-updated-11.0":"1","revision-updated-20240206":"1"}
 ,"2367452069":{"function-事前承認が必要":"1","revision-updated-20240206":"1","function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"2367452071":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"2367452076":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"2367452082":{"function-レッグバンド":"1","revision-updated-19.0":"1"}
 ,"2367452066":{"revision-updated-19.0":"1","function-事前承認が必要":"1","function-レッグバンド":"1","revision-updated-20240206":"1"}
 ,"2367451968":{"revision-updated-1.0":"1","revision-updated-19.0":"1","revision-updated-18.0":"1","revision-updated-4.0":"1","function-レッグバンド":"1","revision-updated-8.0":"1","function-振り回し":"1","revision-updated-3.0":"1","function-vr":"1","revision-updated-0.8":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-17.0":"1","function-事前承認が必要":"1","revision-updated-11.0":"1","revision-updated-15.0":"1","function-toycon":"1","revision-updated-21.0":"1"}
 ,"2367452096":{"function-ペアレンタルコントロール":"1","revision-updated-11.0":"1","revision-updated-20240206":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452100":{"revision-updated-11.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452104":{"revision-updated-11.0":"1","function-振り回し":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452113":{"revision-updated-11.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452123":{"revision-updated-11.0":"1","revision-updated-20240206":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452126":{"revision-updated-15.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452128":{"revision-updated-20240206":"1","revision-updated-18.0":"1","function-vr":"1","function-toycon":"1"}
 ,"2367452093":{"revision-updated-18.0":"1","function-振り回し":"1","revision-updated-15.0":"1","function-vr":"1","function-toycon":"1","function-ペアレンタルコントロール":"1","revision-updated-11.0":"1","revision-updated-20240206":"1"}
 ,"2367452090":{"revision-updated-18.0":"1","function-振り回し":"1","revision-updated-15.0":"1","function-vr":"1","function-toycon":"1","function-ペアレンタルコントロール":"1","revision-updated-11.0":"1","revision-updated-20240206":"1"}
 ,"2367452144":{"revision-updated-1.1":"1","function-デバイスの着脱":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-0.8":"1","revision-updated-2.0":"1","function-すべてのアプリケーション":"1","function-プレイモード切り替え":"1"}
 ,"2632950244":{"function-デバイスの着脱":"1","function-振り回し":"1","revision-updated-20240206":"1","function-ジャイロセンサー":"1","function-加速度センサー":"1","function-タッチスクリーン":"1","function-プレイモード切り替え":"1"}
 ,"2367452136":{"revision-updated-3.0":"1","function-ジャイロセンサー":"1","function-振り回し":"1","revision-updated-1.1":"1","revision-updated-6.0":"1","revision-updated-0.8":"1","function-プレイモード切り替え":"1","function-タッチスクリーン":"1","revision-updated-1.0":"1","function-デバイスの着脱":"1","revision-updated-12.0":"1","revision-updated-2.0":"1","function-加速度センサー":"1","function-すべてのアプリケーション":"1","revision-updated-20240206":"1"}
 ,"2367452168":{"revision-updated-6.0":"1","revision-updated-12.0":"1","function-違反件数が多い":"1","revision-updated-16.0":"1","revision-updated-20240206":"1","revision-updated-17.0":"1","function-プレイモード切り替え":"1"}
 ,"2367452160":{"revision-updated-17.0":"1","revision-updated-16.0":"1","revision-updated-6.0":"1","revision-updated-0.8":"1","function-プレイモード切り替え":"1","function-違反件数が多い":"1","revision-updated-12.0":"1","revision-updated-20240206":"1"}
 ,"2367452134":{"revision-updated-17.0":"1","function-ジャイロセンサー":"1","revision-updated-16.0":"1","function-振り回し":"1","revision-updated-1.1":"1","revision-updated-20240206":"1","revision-updated-6.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","function-プレイモード切り替え":"1","revision-updated-1.0":"1","function-デバイスの着脱":"1","function-すべてのアプリケーション":"1","function-違反件数が多い":"1","revision-updated-12.0":"1","function-タッチスクリーン":"1","revision-updated-0.8":"1","function-加速度センサー":"1"}
 ,"2367452184":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","revision-updated-2.0":"1"}
 ,"2367452186":{"revision-updated-20240206":"1","revision-updated-2.0":"1","revision-updated-17.0":"1","revision-updated-4.0":"1","revision-updated-12.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","function-アカウント":"1","function-マッチメイクボイスチャット":"1","function-npln":"1","revision-updated-9.0":"1","function-フレンドライブラリ":"1","revision-updated-7.0":"1","revision-updated-10.1":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","function-インターネット通信":"1","revision-updated-15.0":"1","revision-updated-21.0":"1","revision-updated-6.0":"1"}
 ,"2367452190":{"revision-updated-6.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","revision-updated-18.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","revision-updated-13.0":"1","revision-updated-4.0":"1","revision-updated-2.0":"1","revision-updated-3.1":"1","revision-updated-21.0":"1"}
 ,"2367452192":{"revision-updated-14.0":"1","function-インターネット通信":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1"}
 ,"2367452194":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-13.0":"1","revision-updated-4.0":"1"}
 ,"2367452196":{"revision-updated-8.0":"1","function-インターネット通信":"1","function-違反件数が多い":"1","revision-updated-16.0":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","revision-updated-17.0":"1","function-エラーハンドリング":"1","function-エラー表示":"1"}
 ,"2367452201":{"revision-updated-8.0":"1","revision-updated-3.1":"1","revision-updated-21.0":"1","function-インターネット通信":"1","revision-updated-3.0":"1","function-エラーハンドリング":"1","revision-updated-5.0":"1","function-アカウント":"1","revision-updated-4.0":"1","function-エラー表示":"1"}
 ,"2367452203":{"function-インターネット通信":"1","revision-updated-8.0":"1","function-広告表示":"1"}
 ,"2367452180":{"revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-16.0":"1","function-エラー表示":"1","function-npln":"1","function-インターネット通信":"1","function-違反件数が多い":"1","function-独自サーバー":"1","revision-updated-14.0":"1","function-フレンドライブラリ":"1","function-アカウント":"1","function-マッチメイクボイスチャット":"1","revision-updated-12.0":"1","revision-updated-20240206":"1","revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-10.1":"1","function-広告表示":"1","revision-updated-3.0":"1","revision-updated-17.0":"1","revision-updated-3.1":"1","revision-updated-15.0":"1","function-nex":"1","function-エラーハンドリング":"1","revision-updated-13.0":"1"}
 ,"2367452207":{"revision-updated-20240206":"1","function-インターネット通信":"1","revision-updated-17.0":"1","function-個人情報":"1","function-nex":"1","revision-updated-1.0":"1","function-npln":"1","revision-updated-8.0":"1","revision-updated-14.0":"1","function-プレイレポート":"1","revision-updated-20240325":"1","revision-updated-15.0":"1","revision-updated-16.0":"1"}
 ,"2367452205":{"revision-updated-17.0":"1","function-個人情報":"1","revision-updated-16.0":"1","revision-updated-8.0":"1","function-プレイレポート":"1","revision-updated-20240325":"1","revision-updated-7.0":"1","revision-updated-15.0":"1","function-インターネット通信":"1","revision-updated-14.0":"1","revision-updated-1.0":"1","revision-updated-13.0":"1","function-nex":"1","revision-updated-9.0":"1","function-npln":"1","revision-updated-20240206":"1"}
 ,"2367452211":{"revision-updated-20240206":"1","revision-updated-1.0":"1","revision-updated-10.0":"1","revision-updated-0.3":"1","revision-updated-9.0":"1","revision-updated-8.0":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-0.4":"1","revision-updated-3.0":"1","revision-updated-6.0":"1","function-nex":"1","function-インターネット通信":"1","revision-updated-16.0":"1"}
 ,"2367452213":{"revision-updated-10.0":"1","revision-updated-1.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","function-nex":"1","revision-updated-0.7":"1"}
 ,"2367452215":{"revision-updated-10.0":"1","revision-updated-12.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-0.6":"1","function-nex":"1","revision-updated-4.0":"1"}
 ,"2367452182":{"revision-updated-10.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","function-nex":"1","revision-updated-4.0":"1","revision-updated-1.0":"1","revision-updated-9.0":"1"}
 ,"2367452217":{"function-nexデータストア":"1","function-インターネット通信":"1","revision-updated-13.0":"1","revision-updated-15.0":"1","function-nex":"1","revision-updated-0.4":"1","function-omas":"1"}
 ,"2367452219":{"function-nexデータストア":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-0.7":"1","revision-updated-0.3":"1","function-nex":"1","function-omas":"1"}
 ,"2367452221":{"revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-12.0":"1","function-インターネット通信":"1","revision-updated-5.0":"1","revision-updated-0.3":"1","revision-updated-0.6":"1","function-nex":"1","revision-updated-0.7":"1"}
 ,"2367452223":{"revision-updated-2.0":"1","revision-updated-14.0":"1","revision-updated-15.0":"1","function-nex":"1","revision-updated-7.0":"1","function-omas":"1"}
 ,"2367452225":{"revision-updated-4.0":"1","function-体験版":"1","function-nex":"1"}
 ,"2367452227":{"revision-updated-10.0":"1","revision-updated-12.0":"1","revision-updated-8.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-5.0":"1","function-nex":"1"}
 ,"2367452233":{"revision-updated-14.0":"1","function-nex":"1"}
 ,"2367452209":{"revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1","revision-updated-2.0":"1","function-体験版":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","revision-updated-16.0":"1","revision-updated-3.0":"1","function-インターネット通信":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","revision-updated-12.0":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","revision-updated-0.4":"1","revision-updated-0.7":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-0.6":"1","function-omas":"1","revision-updated-15.0":"1","function-nexデータストア":"1","function-nex":"1","revision-updated-13.0":"1"}
 ,"2367452237":{"revision-updated-3.1":"1","function-インターネット通信":"1","function-bcat":"1"}
 ,"2367452235":{"revision-updated-3.1":"1","revision-updated-3.0":"1","function-インターネット通信":"1","function-bcat":"1"}
 ,"2367452241":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-1.1":"1"}
 ,"2367452243":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1"}
 ,"2367452245":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"2367452248":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"2367452252":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"2367452255":{"function-独自サーバー":"1","function-インターネット通信":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1"}
 ,"2367452239":{"revision-updated-19.0":"1","revision-updated-20.0":"1","revision-updated-18.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-1.1":"1","revision-updated-3.1":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","function-インターネット通信":"1","revision-updated-14.0":"1","revision-updated-1.0":"1","revision-updated-0.3":"1","revision-updated-13.0":"1","function-アカウント":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"2367452260":{"function-独自サーバー":"1","revision-updated-3.1":"1","revision-updated-1.0":"1","function-インターネット通信":"1","revision-updated-6.0":"1","function-事前承認が必要":"1","function-クロスプラットフォーム":"1","revision-updated-16.0":"1","revision-updated-2.0":"1","function-omas":"1","revision-updated-4.0":"1"}
 ,"2367452262":{"revision-updated-10.0":"1","revision-updated-3.1":"1","function-クロスプラットフォーム":"1","function-lan内通信":"1","revision-updated-9.0":"1"}
 ,"2367452258":{"function-独自サーバー":"1","revision-updated-16.0":"1","revision-updated-10.0":"1","revision-updated-3.1":"1","revision-updated-6.0":"1","function-omas":"1","function-インターネット通信":"1","revision-updated-1.0":"1","function-lan内通信":"1","function-クロスプラットフォーム":"1","revision-updated-2.0":"1","revision-updated-9.0":"1","revision-updated-4.0":"1","function-事前承認が必要":"1"}
 ,"2367452266":{"revision-updated-4.0":"1","revision-updated-3.2":"1","function-ローカル通信":"1"}
 ,"2367452268":{"function-インターネット通信":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-15.0":"1","function-ローカル通信":"1"}
 ,"2367452264":{"function-インターネット通信":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-15.0":"1","revision-updated-4.0":"1","revision-updated-3.2":"1","function-ローカル通信":"1"}
 ,"2367452272":{"revision-updated-14.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1","function-lan内通信":"1"}
 ,"2367452270":{"revision-updated-17.0":"1","revision-updated-15.0":"1","revision-updated-14.0":"1","function-lan内通信":"1"}
 ,"2367452229":{"revision-updated-21.0":"1","revision-updated-7.0":"1","function-nex":"1"}
 ,"2367452231":{"function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-21.0":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","function-nex":"1","function-npln":"1"}
 ,"2551370340":{"function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-12.0":"1","function-nex":"1","function-npln":"1","revision-updated-21.0":"1"}
 ,"2367452178":{"revision-updated-3.2":"1","revision-updated-3.0":"1","revision-updated-1.1":"1","function-lan内通信":"1","function-独自サーバー":"1","revision-updated-20240206":"1","function-マッチメイクボイスチャット":"1","revision-updated-16.0":"1","revision-updated-12.0":"1","revision-updated-4.0":"1","function-npln":"1","revision-updated-15.0":"1","function-ローカル通信":"1","function-広告表示":"1","revision-updated-1.0":"1","function-プレイレポート":"1","function-アカウント":"1","function-個人情報":"1","revision-updated-7.0":"1","function-nex":"1","revision-updated-20240325":"1","revision-updated-19.0":"1","function-エラー表示":"1","function-bcat":"1","function-omas":"1","revision-updated-21.0":"1","revision-updated-8.0":"1","revision-updated-2.0":"1","function-インターネット通信":"1","revision-updated-0.6":"1","revision-updated-9.0":"1","function-事前承認が必要":"1","function-ニンテンドーアカウントの認可リクエスト":"1","revision-updated-20240626":"1","function-nexデータストア":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","revision-updated-10.1":"1","revision-updated-18.0":"1","revision-updated-5.0":"1","revision-updated-20.0":"1","revision-updated-3.1":"1","revision-updated-0.3":"1","function-フレンドライブラリ":"1","function-違反件数が多い":"1","revision-updated-0.7":"1","function-エラーハンドリング":"1","revision-updated-17.0":"1","revision-updated-13.0":"1","revision-updated-6.0":"1","function-体験版":"1","revision-updated-0.4":"1","function-クロスプラットフォーム":"1"}
 ,"2367452278":{"revision-updated-6.0":"1","revision-updated-14.0":"1","revision-updated-13.0":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","function-アカウント":"1"}
 ,"2367452280":{"revision-updated-14.0":"1","revision-updated-15.0":"1","function-アカウント":"1"}
 ,"2367452282":{"revision-updated-8.0":"1","revision-updated-7.0":"1","function-アカウント":"1"}
 ,"2367452284":{"revision-updated-7.0":"1","function-アカウント":"1"}
 ,"2367452286":{"revision-updated-20.0":"1","revision-updated-21.0":"1","revision-updated-19.1":"1","revision-updated-8.0":"1","revision-updated-15.0":"1","function-アカウント":"1","revision-updated-9.0":"1"}
 ,"2367452288":{"function-違反件数が多い":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","revision-updated-20240325":"1"}
 ,"2367452290":{"revision-updated-20.0":"1","revision-updated-18.0":"1","function-アカウント":"1","revision-updated-19.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1"}
 ,"2367452276":{"revision-updated-19.0":"1","revision-updated-20.0":"1","revision-updated-19.1":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-20240325":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-15.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","revision-updated-18.0":"1","revision-updated-13.0":"1","function-アカウント":"1","revision-updated-9.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1","revision-updated-21.0":"1"}
 ,"2367452295":{"revision-updated-8.0":"1","function-フレンドライブラリ":"1","revision-updated-5.2":"1","revision-updated-9.0":"1"}
 ,"2367452297":{"revision-updated-12.0":"1","function-ugc":"1","function-フレンドライブラリ":"1"}
 ,"2367452293":{"revision-updated-8.0":"1","function-フレンドライブラリ":"1","function-ugc":"1","revision-updated-12.0":"1","revision-updated-5.2":"1","revision-updated-9.0":"1"}
 ,"2367452274":{"revision-updated-18.0":"1","revision-updated-5.0":"1","revision-updated-21.0":"1","revision-updated-8.0":"1","revision-updated-9.0":"1","function-違反件数が多い":"1","revision-updated-20240325":"1","revision-updated-14.0":"1","function-フレンドライブラリ":"1","function-ugc":"1","function-アカウント":"1","revision-updated-12.0":"1","revision-updated-19.0":"1","revision-updated-19.1":"1","revision-updated-7.0":"1","revision-updated-5.2":"1","revision-updated-20.0":"1","revision-updated-6.0":"1","revision-updated-15.0":"1","function-ニンテンドーアカウントの認可リクエスト":"1","revision-updated-13.0":"1"}
 ,"2367452303":{"revision-updated-20240206":"1","revision-updated-6.0":"1","revision-updated-14.0":"1","function-npln":"1","function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","function-nintendoswitchonline":"1","revision-updated-15.0":"1","revision-updated-21.0":"1"}
 ,"2367452305":{"revision-updated-20240206":"1","revision-updated-14.0":"1","revision-updated-10.0":"1","function-マッチメイクボイスチャット":"1","function-npln":"1","function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-13.0":"1","function-nex":"1","revision-updated-20.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1"}
 ,"2367452307":{"revision-updated-20.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-18.0":"1","function-npln":"1"}
 ,"2367452301":{"revision-updated-20.0":"1","revision-updated-18.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-10.0":"1","revision-updated-6.0":"1","revision-updated-15.0":"1","revision-updated-14.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-13.0":"1","function-マッチメイクボイスチャット":"1","revision-updated-12.0":"1","function-nex":"1","function-npln":"1","revision-updated-20240206":"1"}
 ,"2367452299":{"revision-updated-20.0":"1","revision-updated-18.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-20240206":"1","revision-updated-6.0":"1","revision-updated-15.0":"1","revision-updated-14.0":"1","function-nintendoswitchonline":"1","revision-updated-21.0":"1","revision-updated-13.0":"1","function-マッチメイクボイスチャット":"1","revision-updated-12.0":"1","function-nex":"1","function-npln":"1","revision-updated-10.0":"1"}
 ,"2367452313":{"function-ペアレンタルコントロール":"1","revision-updated-21.0":"1","function-ugc":"1","revision-updated-5.0":"1","revision-updated-0.5":"1","revision-updated-0.6":"1"}
 ,"2367452315":{"function-ugc":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-0.6":"1","revision-updated-0.7":"1","revision-updated-2.0":"1"}
 ,"2367452317":{"revision-updated-14.0":"1","function-ugc":"1","revision-updated-0.7":"1","revision-updated-0.6":"1","function-irセンサー":"1"}
 ,"2367452311":{"revision-updated-3.0":"1","revision-updated-0.7":"1","revision-updated-7.0":"1","revision-updated-5.0":"1","revision-updated-9.0":"1","function-irセンサー":"1","function-ugc":"1","revision-updated-20240206":"1","revision-updated-0.6":"1","revision-updated-1.0":"1","revision-updated-14.0":"1","function-ペアレンタルコントロール":"1","revision-updated-2.0":"1","revision-updated-0.5":"1","revision-updated-21.0":"1"}
 ,"2367452309":{"revision-updated-0.7":"1","revision-updated-7.0":"1","revision-updated-10.0":"1","revision-updated-5.0":"1","revision-updated-21.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-20240206":"1","revision-updated-14.0":"1","revision-updated-1.0":"1","function-irセンサー":"1","revision-updated-0.6":"1","revision-updated-9.0":"1","function-ペアレンタルコントロール":"1","revision-updated-0.5":"1","function-ugc":"1"}
 ,"2367452323":{"revision-updated-10.0":"1","revision-updated-14.0":"1","revision-updated-20240626":"1","function-パッチ":"1","revision-updated-13.0":"1","revision-updated-3.0":"1","revision-updated-7.0":"1","revision-updated-18.0":"1","revision-updated-2.0":"1","revision-updated-6.0":"1","revision-updated-9.0":"1"}
 ,"2367452325":{"revision-updated-12.0":"1","function-パッチ":"1","function-違反件数が多い":"1","revision-updated-8.0":"1","revision-updated-7.0":"1","revision-updated-0.3":"1","revision-updated-5.0":"1"}
 ,"2367452321":{"revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-2.0":"1","revision-updated-3.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","revision-updated-0.3":"1","revision-updated-13.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","function-パッチ":"1","revision-updated-9.0":"1","revision-updated-10.0":"1"}
 ,"2367452319":{"revision-updated-18.0":"1","revision-updated-7.0":"1","revision-updated-8.0":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-3.0":"1","revision-updated-14.0":"1","function-違反件数が多い":"1","revision-updated-0.3":"1","revision-updated-13.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","revision-updated-2.0":"1","revision-updated-9.0":"1","function-パッチ":"1","revision-updated-10.0":"1"}
 ,"2367452331":{"revision-updated-2.0":"1","function-eコマース":"1"}
 ,"2367452333":{"revision-updated-14.0":"1","revision-updated-17.0":"1","function-eコマース":"1"}
 ,"2367452335":{"revision-updated-16.0":"1","function-eコマース":"1"}
 ,"2367452329":{"revision-updated-17.0":"1","revision-updated-16.0":"1","revision-updated-1.1":"1","revision-updated-14.0":"1","revision-updated-2.0":"1","function-eコマース":"1"}
 ,"2367452339":{"revision-updated-4.0":"1","revision-updated-16.0":"1","revision-updated-17.0":"1","revision-updated-19.0":"1","function-eコマース":"1"}
 ,"2367452341":{"function-独自サーバー":"1","revision-updated-14.0":"1","revision-updated-6.0":"1","revision-updated-8.0":"1","revision-updated-4.0":"1","revision-updated-3.0":"1","revision-updated-5.0":"1","function-eコマース":"1","revision-updated-5.2":"1","function-エラー表示":"1"}
 ,"2367452343":{"revision-updated-6.0":"1","revision-updated-8.0":"1","function-eコマース":"1","function-エラー表示":"1"}
 ,"2367452345":{"function-独自サーバー":"1","revision-updated-6.0":"1","revision-updated-7.0":"1","function-eコマース":"1"}
 ,"2367452347":{"revision-updated-12.0":"1","revision-updated-14.0":"1","revision-updated-16.0":"1","function-eコマース":"1"}
 ,"2367452337":{"revision-updated-19.0":"1","revision-updated-17.0":"1","function-独自サーバー":"1","revision-updated-16.0":"1","revision-updated-8.0":"1","revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-7.0":"1","revision-updated-3.0":"1","revision-updated-4.0":"1","revision-updated-14.0":"1","function-エラー表示":"1","revision-updated-12.0":"1","revision-updated-5.2":"1","function-eコマース":"1"}
 ,"2367452351":{"revision-updated-14.0":"1","revision-updated-7.0":"1","function-eコマース":"1"}
 ,"2367452353":{"function-独自サーバー":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","revision-updated-14.0":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-17.0":"1","function-eコマース":"1","revision-updated-8.0":"1","revision-updated-9.0":"1"}
 ,"2367452355":{"revision-updated-17.0":"1","revision-updated-8.0":"1","revision-updated-16.0":"1","revision-updated-18.0":"1","function-eコマース":"1","revision-updated-9.0":"1"}
 ,"2367452349":{"revision-updated-17.0":"1","function-独自サーバー":"1","revision-updated-7.0":"1","revision-updated-16.0":"1","revision-updated-15.0":"1","revision-updated-14.0":"1","revision-updated-8.0":"1","revision-updated-18.0":"1","revision-updated-12.0":"1","revision-updated-20240626":"1","revision-updated-9.0":"1","function-eコマース":"1"}
 ,"2367452327":{"revision-updated-19.0":"1","revision-updated-5.0":"1","revision-updated-18.0":"1","revision-updated-4.0":"1","revision-updated-8.0":"1","function-エラー表示":"1","revision-updated-14.0":"1","revision-updated-16.0":"1","revision-updated-1.1":"1","revision-updated-9.0":"1","function-独自サーバー":"1","function-eコマース":"1","revision-updated-5.2":"1","revision-updated-12.0":"1","revision-updated-2.0":"1","revision-updated-7.0":"1","revision-updated-6.0":"1","revision-updated-3.0":"1","revision-updated-17.0":"1","revision-updated-15.0":"1","revision-updated-20240206":"1","revision-updated-20240626":"1"}
 ,"2367452361":{"function-体験版":"1","revision-updated-2.0":"1","revision-updated-9.0":"1"}
 ,"2367452363":{"revision-updated-6.0":"1","revision-updated-12.0":"1","revision-updated-13.0":"1","revision-updated-5.0":"1","function-体験版":"1","revision-updated-2.0":"1"}
 ,"2367452359":{"revision-updated-6.0":"1","revision-updated-5.0":"1","revision-updated-9.0":"1","function-体験版":"1","revision-updated-13.0":"1","revision-updated-12.0":"1","revision-updated-2.0":"1"}
 ,"2367452357":{"revision-updated-5.0":"1","revision-updated-6.0":"1","revision-updated-2.0":"1","function-体験版":"1","revision-updated-13.0":"1","revision-updated-12.0":"1","revision-updated-9.0":"1"}
 ,"2367452369":{"function-テキスト表示":"1","function-違反件数が多い":"1","revision-updated-1.1":"1","revision-updated-20240206":"1","revision-updated-0.7":"1","function-すべてのアプリケーション":"1"}
 ,"2367452371":{"revision-updated-1.1":"1","revision-updated-20240626":"1","revision-updated-4.0":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","revision-updated-2.0":"1","revision-updated-19.0":"1","function-広告表示":"1","revision-updated-20240325":"1"}
 ,"2367452375":{"revision-updated-13.0":"1","revision-updated-14.0":"1","function-ugc":"1","revision-updated-17.0":"1","function-china_region":"1"}
 ,"2367452367":{"revision-updated-19.0":"1","function-テキスト表示":"1","revision-updated-0.7":"1","revision-updated-1.1":"1","revision-updated-20240325":"1","function-違反件数が多い":"1","revision-updated-3.0":"1","revision-updated-4.0":"1","revision-updated-14.0":"1","revision-updated-17.0":"1","function-china_region":"1","function-広告表示":"1","revision-updated-13.0":"1","revision-updated-20240626":"1","revision-updated-2.0":"1","function-ugc":"1","function-すべてのアプリケーション":"1","revision-updated-20240206":"1"}
 ,"2367452379":{"revision-updated-0.4":"1","function-nfp":"1"}
 ,"2367452381":{"revision-updated-0.3":"1","function-nfp":"1"}
 ,"2367452383":{"revision-updated-0.4":"1","revision-updated-21.0":"1","revision-updated-1.0":"1","revision-updated-6.0":"1","revision-updated-20240206":"1","revision-updated-7.0":"1","function-nfp":"1"}
 ,"2367452385":{"revision-updated-1.1":"1","revision-updated-3.0":"1","function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.3":"1","revision-updated-0.7":"1","revision-updated-2.0":"1","function-nfp":"1"}
 ,"2367452387":{"function-事前承認が必要":"1","revision-updated-20240206":"1","revision-updated-0.7":"1","function-nfp":"1"}
 ,"2367452389":{"revision-updated-1.1":"1","revision-updated-0.4":"1","revision-updated-3.0":"1","revision-updated-0.3":"1","function-nfp":"1"}
 ,"2367452391":{"revision-updated-6.0":"1","revision-updated-16.0":"1","revision-updated-0.3":"1","revision-updated-0.7":"1","function-nfp":"1","revision-updated-5.2":"1"}
 ,"2367452393":{"revision-updated-1.1":"1","function-素材集":"1","revision-updated-21.0":"1","function-nfp":"1"}
 ,"2367452377":{"revision-updated-0.4":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","revision-updated-1.1":"1","revision-updated-20240206":"1","function-nfp":"1","revision-updated-16.0":"1","revision-updated-3.0":"1","revision-updated-1.0":"1","function-素材集":"1","revision-updated-0.3":"1","revision-updated-5.2":"1","revision-updated-2.0":"1","function-事前承認が必要":"1","revision-updated-6.0":"1","revision-updated-21.0":"1"}
 ,"2367452365":{"function-china_region":"1","revision-updated-6.0":"1","revision-updated-0.3":"1","revision-updated-19.0":"1","revision-updated-21.0":"1","revision-updated-4.0":"1","function-素材集":"1","revision-updated-3.0":"1","revision-updated-16.0":"1","function-違反件数が多い":"1","revision-updated-20240325":"1","revision-updated-1.1":"1","revision-updated-0.2":"1","revision-updated-14.0":"1","revision-updated-5.2":"1","function-ugc":"1","function-広告表示":"1","revision-updated-2.0":"1","revision-updated-7.0":"1","revision-updated-0.7":"1","function-nfp":"1","revision-updated-0.4":"1","revision-updated-17.0":"1","function-事前承認が必要":"1","revision-updated-1.0":"1","revision-updated-13.0":"1","function-すべてのアプリケーション":"1","function-テキスト表示":"1","revision-updated-20240206":"1","revision-updated-20240626":"1"}
 ,"2367452399":{"revision-updated-19.0":"1","revision-updated-3.1":"1","revision-updated-1.1":"1","revision-updated-20240325":"1","revision-updated-0.8":"1","revision-updated-1.0":"1"}
};


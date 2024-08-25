const { parser, url } = require('./skyperfectv.co.jp.config.js')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
dayjs.extend(utc)

const date = dayjs.utc('2024-08-01', 'YYYY-MM-DD').startOf('d')
const channel = {
  site_id: 'basic_BS193',
  name: 'ＷＯＷＯＷシネマ',
  xmltv_id: 'WOWOWCinema.jp'
}

const content = `
<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width"><meta name="format-detection" content="telephone=no"><title>番組表（アニメシアターX(AT-X)）｜スカパー！</title><!-- Google Tag Manager 2021/03--><script>(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-K73Z39');</script><!-- End Google Tag Manager 2021/03 --><meta property="og:title" content="番組表（アニメシアターX(AT-X)）｜スカパー！"><meta property="og:type" content="article"><meta property="og:description" content="「アニメシアターX(AT-X)」を見るならスカパー！で。直近30日間の放送予定を番組表形式でご確認いただけます。"><meta property="og:url" content="https://skyperfectv.co.jp/program/schedule/basic/channel:CS333/date:240801"><meta property="og:image" content="https://skyperfectv.co.jp/global/assets/images/fb_logo.jpg"><meta property="og:site_name" content="【公式】スカパー！スポーツ、音楽、アニメ、 映画をTVでもスマホでも視聴可"><meta property="og:locale" content="ja_JP"><meta property="fb:app_id" content="357325544353129"><meta name="description" content="「アニメシアターX(AT-X)」を見るならスカパー！で。直近30日間の放送予定を番組表形式でご確認いただけます。"><meta name="Keywords" content="番組,スカパー,テレビ,放送,予定表"><!-- ICON --><link rel="shortcut icon" href="/global/assets/images/fav/favicon.ico" type="image/vnd.microsoft.icon"><link rel="apple-touch-icon" href="/global/assets/images/fav/apple-touch-icon.png"><link href="/global/assets/css/global.css" rel="stylesheet"><link href="/assets/css/style.css" rel="stylesheet"><link href="/program/schedule/css/style.css?m=10" rel="stylesheet"><link rel="canonical" href="https://skyperfectv.co.jp/program/schedule/basic/channel:CS333/"></head><body class="fw"><!-- Google Tag Manager (noscript) 2021/3 --><noscript><iframesrc="https: //www.googletagmanager.com/ns.html?id=GTM-K73Z39" height="0" width="0"style="display:none;visibility:hidden"></iframe></noscript><input type="hidden" id="basic_plan_flg"value="0" /><!-- End Google Tag Manager (noscript) 2021/3 --><!-- .l-header include --><div id="header"></div><!-- /.l-header include --><div class="l-container" id="j-container"><!-- .l-side include --><div id="side"></div><!-- /.l-side include --><div class="l-container__main" id="j-container-main"><main><div id="mainContents"><div id="js-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストを更新中です。</p></div></div><div id="js-regist-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストに登録中です。</p></div></div><div id="js-delete-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストから削除中です。</p></div></div><!-- コンテンツをいれてください --><!-- 選択されたサービス--><input type="hidden" id="selectedService"value="basic"><!-- 選択されたチャンネル--><input type="hidden" id="selectedChannel"value="CS333"><!-- 選択された日付--><input type="hidden" id="selectedDate"value="240801"><!-- チャンネルアイコン--><input type="hidden" id="channelIcon" value=""><div id="js-schedule-wrapper" class="p-schedule-wrapper"><div id="js-hdr-normal" class="p-hdr p-hdr--normal"><div class="p-hdr__wrap"><div class="p-hdr__inner"><h1 class="p-hdr__ttl">番組放送予定表</h1><div class="p-hdr__box js-p-hdr-box"><div class="p-status"><div class="p-status__box"><div class="p-status__id"></div><div class="p-status__name"><spanclass="p-status__name__ttl"></span><spanclass="p-status__name__ico"style="display:none"><img src="/global/assets/images/icon/icon_plan_basic.svg"alt="基本プラン"></span></div></div></div><div class="p-switch p-hdr__switch"><button type="button"class="p-switch__btn js-switch-btn"><spanclass="p-switch__label">チャンネル選択</span><iclass="p-switch__icon"><svg><use href="#menu"></use></svg></i></button></div></div><div class="p-hdr__cal p-calendar js-cal"><buttonclass="p-calendar__btnjs-cal-toggle"><svg id="編集モード" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 236 262"><defs><style>.cls-1 {fill: #fff;}.cls-2 {fill: #000;}</style></defs><rect class="cls-1" x="22" y="45" width="187.8" height="190.8" /><rect class="cls-2" x="85.3" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="194.6" width="26.2" height="26.2" /><path class="cls-2"d="M236,52.4V235.8A26.23,26.23,0,0,1,209.8,262H26.2A26.23,26.23,0,0,1,0,235.8H0L.1,52.4a26.18,26.18,0,0,1,26-26.2H39.3V0H65.5V26.2H170.4V0h26.2V26.2h13.1A26.25,26.25,0,0,1,236,52.4ZM26.2,78.6H209.8V52.4H26.2ZM209.8,235.8v-131H26.2v131Z" /></svg></button><div class="p-calendar__main js-calbox"><div class="p-calendar__month"><spanclass="p-calendar__month-num"></span>月</div><div class="p-calendar__desc">選択した日付から1週間の番組表を表示します</div><div class="p-calendar__content"><table><thead><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr></thead><tbody></tbody></table></div></div></div></div></div></div><div id="js-hdr" class="p-hdr p-hdr--small"><div class="p-hdr__wrap"><div class="p-hdr__inner"><div class="p-hdr__ttl">番組放送予定表</div><div class="p-hdr__box js-p-hdr-box"><div class="p-status p-status--small"><div class="p-status__box"><div class="p-status__id"></div><div class="p-status__name"><spanclass="p-status__name__ttl"></span><spanclass="p-status__name__ico"style="display:none"><img src="/global/assets/images/icon/icon_plan_basic.svg"alt="基本プラン"></span></div></div></div><div class="p-switch p-hdr__switch"><button type="button"class="p-switch__btn js-switch-btn"><spanclass="p-switch__label">チャンネル選択</span><iclass="p-switch__icon"><svg><use href="#menu"></use></svg></i></button></div></div><div class="p-hdr__cal p-calendar js-cal"><buttonclass="p-calendar__btnjs-cal-toggle"><svg id="編集モード" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 236 262"><defs><style>.cls-1 {fill: #fff;}.cls-2 {fill: #000;}</style></defs><rect class="cls-1" x="22" y="45" width="187.8" height="190.8" /><rect class="cls-2" x="85.3" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="194.6" width="26.2" height="26.2" /><path class="cls-2"d="M236,52.4V235.8A26.23,26.23,0,0,1,209.8,262H26.2A26.23,26.23,0,0,1,0,235.8H0L.1,52.4a26.18,26.18,0,0,1,26-26.2H39.3V0H65.5V26.2H170.4V0h26.2V26.2h13.1A26.25,26.25,0,0,1,236,52.4ZM26.2,78.6H209.8V52.4H26.2ZM209.8,235.8v-131H26.2v131Z" /></svg></button><div class="p-calendar__main js-calbox"><div class="p-calendar__month"><spanclass="p-calendar__month-num"></span>月</div><div class="p-calendar__desc">選択した日付から1週間の番組表を表示します</div><div class="p-calendar__content"><table><thead><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr></thead><tbody></tbody></table></div></div></div></div></div></div><div><div class="p-body"><div id="js-date-row" class="p-date-row"><div id="js-date-row-container" class="p-date-row__inner"><div id="js-date-row-inner2" class="p-date-row__inner2"><table id="js-date-row-item" class="p-schedule__table"><thead id="js-date-row-put" class="p-schedule__whdr"></thead></table></div></div></div><div id="js-pager" class="p-pager"><ahref="/program/schedule/basic/channel:CS333/date:240801"class="js-date-row-btn p-pager__btn p-pager__btn--prev is-disabled"><div class="p-pager__btn-inner"><p><i class="p-pager__btn__icon"></i><span>前週</span></p></div></a><a href="/program/schedule/basic/channel:CS333/date:240808"class="js-date-row-btn p-pager__btn p-pager__btn--next"><div class="p-pager__btn-inner"><p><i class="p-pager__btn__icon"></i><span>次週</span></p></div></a></div><div class="p-schedule"><div id="js-schedule-container" class="p-schedule__inner"><div id="js-schedule" class="p-schedule__main"><div id="js-schedule-inner" class="p-schedule__wtable"><div id="js-tlabel" class="p-tlabel"><div class="p-tlabel__inner"><p id="js-am-label" class="p-tlabel__item">午前（<span>4</span>時～）</p><p id="js-pm-label" class="p-tlabel__item">午後（<span>12</span>時～）</p><p id="js-md-label" class="p-tlabel__item">深夜（<span>24</span>時～）</p></div></div><div class="p-date-row-abs"><div class="p-date-row-abs__inner"><div class="p-date-row-abs__inner2"><div id="js-date-row-abs-container"class="p-date-row-abs__cont"><table class="p-schedule__table"><thead id="js-date-row-put-abs"class="p-schedule__whdr"></thead></table></div></div></div></div><table id="js-schedule-table" class="p-schedule__table"><thead id="js-schedule-date" class="p-schedule__whdr"><tr id="js-schedule-date-row"><th class=""><div class="p-schedule__hdr" data-date="2024-08-01"><time datetime="2024-08-01"class="p-schedule__on"><!--無料の日タグ--><bclass="p-schedule__m">08</b><bclass="p-schedule__sep">/</b><bclass="p-schedule__d">01</b><spanclass="p-schedule__w">(木)</span></time></div></th><th class=""><div class="p-schedule__hdr" data-date="2024-08-02"><time datetime="2024-08-02"class="p-schedule__on"><!--無料の日タグ--><bclass="p-schedule__m">08</b><bclass="p-schedule__sep">/</b><bclass="p-schedule__d">02</b><spanclass="p-schedule__w">(金)</span></time></div></th></tr></thead><tbody><tr id="js-am"><td><div class="p-schedule__cellheight"><ul class="p-program"><li class="p-program__item "><buttontype="button" draggable="true"data-infoid="31534798"data-contentsid="31974631"class="p-program__star js-star"><svg><use href="#star"></use></svg></button><ahref="/program/detail/?uid=c31974631"class="p-program__link"><div class="p-program__meta"><p class="p-program__range">04:00〜04:30</p></div><p class="p-program__name">ヴァルキリードライヴマーメイド #06</p><div class="p-program__icons"></div><figure class="p-program__imgp-img-disablep-image-ratio"><img class="js-program_thumbnail" src="/program/schedule/images/img_opacity.gif"data-chflg="false" data-lazysrc="https://pm-img-ap.skyperfectv.co.jp/uploads/thumbnail/image/11301805/S_BC929697780313_be7975d4e26a4cad9b89fc6c94807e38_20240613144158569.jpg" alt="番組サムネイル"><img src="/program/schedule/images/img_opacity.gif" alt="" class="p-img-disable__overlay"></figure></a></li></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr><tr id="js-pm"><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr><tr id="js-md"><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr></tbody></table></div></div></div></div></div><div class="p-sticky-placeholder"></div><div id="js-floating" class="p-floating"><div id="js-app-download" class="p-app-download"><div class="p-app-download__bnrp-img-disable"><button id="js-app-download__close"class="p-app-download__close" type="button"><img src=" /program/schedule/images/btn_close2.png" alt="閉じる"></button><ahref=" /service/portal/bangumiapp/"><img src=" /program/schedule/images/btn_app.png" alt="newAppBannerImg"width="468" class="is-pc"><img src=" /program/schedule/images/btn_app_sp.png" alt="newAppBannerImg"width="468" class="is-sp"><img src=" /program/schedule/images/img_opacity.gif" alt=""class="p-img-disable__overlay"></a></div></div></div></div><div id="js-endpoint"></div><svg class="p-symbols"><defs><symbol id="star" viewBox="0 0 21.5 20.5"><path fill-rule="evenodd" stroke-width="1px" stroke-linecap="butt"stroke-linejoin="miter"d="M14.963,12.496 L16.75,18.987 L10.249,15.922 L4.424,18.987 L5.536,12.496 L0.823,7.899 L7.337,6.951 L10.249,1.45 L13.162,6.951 L19.677,7.899 L14.963,12.496 Z" /></symbol><symbol id="menu" viewBox="0 0 4 18"><path fill-rule="evenodd"d="M2.104,10.910 C1.108,10.910 0.305,10.106 0.305,9.111 C0.305,8.116 1.108,7.312 2.104,7.312 C3.99,7.312 3.903,8.116 3.903,9.111 C3.903,10.106 3.99,10.910 2.104,10.910 ZM2.104,4.510 C1.108,4.510 0.305,3.707 0.305,2.711 C0.305,1.716 1.108,0.912 2.104,0.912 C3.99,0.912 3.903,1.716 3.903,2.711 C3.903,3.707 3.99,4.510 2.104,4.510 ZM2.104,13.712 C3.99,13.712 3.903,14.515 3.903,15.511 C3.903,16.506 3.99,17.310 2.104,17.310 C1.108,17.310 0.305,16.506 0.305,15.511 C0.305,14.515 1.108,13.712 2.104,13.712 Z" /></symbol></defs></svg></div><div id="js-modal" class="p-modal"><div class="p-modal__overlay js-modal-close"></div><div class="p-modal__window"><button class="p-modal__close js-modal-close"><img src=" /program/schedule/images/btn_close3.png" alt="閉じる"></button><div class="p-modal__content"><div class="p-tab js-tab"><div class="p-tab__wbtn"><button type="button" value="junle"class="js-tab-btn p-tab__btn is-active">ジャンル</button><button type="button"value="channel-num" class="js-tab-btn p-tab__btn ">チャンネル番号順</button></div><div class="p-modal__main"><div class="p-modal__main-inner"><div id="junle" class="p-tab__body js-tab-unit js-filter-unit"><div class="p-tab__select p-tab__select--sp p-tab__selectelm"><selectclass="js-filter-select"><option value="">すべて</option></select></div><div class="p-tab__select p-tab__select--col6 p-tab__select--pc"><buttonvalue="" class="js-filter p-tab__filter is-active">すべて</button></div><div class="p-tab__search"><div class="p-tab__search-col"><input type="text"placeholder="チャンネル名で検索" class="p-tab__search-q"><buttontype="button" class="p-tab__search-btn"></button></div></div><div id="channel_genre"class="js-wrap-filter-item p-tab__wrap-filter-item"></div></div><div id="channel-num"class="p-tab__body js-tab-unit js-filter-unit is-hide"><div id="bscs_tab" class="p-tab__select p-tab__select--col3"><buttonvalue=""class="js-filter p-tab__filteris-active">すべて</button><buttonvalue="bs" class="js-filter p-tab__filter">BS</button><buttonvalue="cs" class="js-filter p-tab__filter">CS</button></div><div id="channel_order"class="js-wrap-filter-item p-tab__wrap-filter-item"></div></div><div class="p-modal__wbtn"><a href="/program/schedule/premium/"class="p-modal__btn">プレミアムサービス/<br>プレミアムサービス光のチャンネル一覧</a></div></div></div></div></div></div></div><div class="p-notice p-notice--foot"><p class="p-notice__inner"><iclass="p-notice__icon"></i><spanclass="p-notice__txt">番組情報は予告なく変更となる場合がありますのでご了承ください</span></p></div><div class="l-inner"><div class="c-note">・このサイトでは、当日から1週間分はEPGと同等の番組情報が表示され、その先1ヶ月後まではガイド誌（有料）と同等の番組情報が表示されます。番組や放送予定は予告なく変更される場合がありますのでご了承ください。<br>・このサイトは、ウェブブラウザーMicrosoftEdge最新版、GoogleChrome最新版、Firefox最新版、Safari最新版での動作を確認しております。上記以外のウェブブラウザーで閲覧されますと、表示の乱れや予期せぬ動作を起こす場合がございますので、予めご了承ください。</div><div class="c-copyright js-copyright" id="j-copyright">©橋本悠／集英社・リリサ製作委員会/©鍋敷/アース・スターエンターテイメント/俺は全てを【パリイ】する製作委員会/©AT-X　©天原・masha／株式会社ＫＡＤＯＫＡＷＡ／異種族レビュアーズ製作委員会/©THEMARGINALSERVICE PROJECT/©荒巻義雄・徳間書店/©2015上栖綴人・Nitroplus/ＫＡＤＯＫＡＷＡ/「新妹魔王の契約者BURST」製作委員会/©中村力斗・野澤ゆき子／集英社・君のことが大大大大大好きな製作委員会/©2018上栖綴人・Nitroplus/KADOKAWA/「新妹魔王の契約者DEPARTURES」製作委員会/© 小林尽／講談社・マーベラス・キングレコード・創通</div></div><div><!-- 星ボタンクリックで出てくるメッセージ --><div id="js-mystar-fail" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg">##ERROR_MSG##</p></div><div id="js-mystar-fail_del" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg"><b>##ERROR_MSG##</b></p></div><div id="js-mystar-nothing" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg"><b>##ERROR_MSG##</b></p></div><div id="js-mystar-confirm" class="p-mystar p-mystar--confirm"><buttonclass="p-mystar__closejs-mystar-close"></button><p class="p-mystar__msg"><b>マイリストから削除してもよいですか？</b></p><div class="p-mystar__wbtn"><button class="p-mystar__btn js-confirm-btn"value="y">はい</button><button class="p-mystar__btn js-confirm-btn"value="n">いいえ</button></div></div><div id="js-mystar-notlogged" class="p-mystar p-mystar--notlogged"><buttonclass="p-mystar__closejs-mystar-close"></button><dl><dt class="p-mystar__ttl"><b>ログインをしてお気に入り番組を登録しよう！</b></dt><dd class="p-mystar__txt">Myスカパー！にログインをすると、マイリストにお気に入り番組リストを作成することができます！</dd></dl><div class="p-mystar__wbtn"><buttondata-login_url="https://my.skyperfectv.co.jp/login/?bk_url=http%3A%2F%2Fskyperfectv.co.jp%2Fprogram%2Fschedule%2Fbasic%2Fchannel%3ACS333%2Fdate%3A240801"class="p-mystar__btn p-mystar__btn--login js-confirm-btn"value="to_login">ログイン</button><ahref="https://my.skyperfectv.co.jp/entry/signup/"class="p-mystar__btn">新規会員登録</a></div></div><div id="js-mystar-over" class="p-mystar p-mystar--over js-dautohide"><buttonclass="p-mystar__close js-mystar-close"></button><dl><dt class="p-mystar__ttl"><b>マイリストに番組を登録できません</b></dt><dd class="p-mystar__txt">##ERROR_MSG##</dd></dl></div><div id="js-overlay" class="p-overlay"></div></div></div><a href="#" class="c-btn-top j-smooth-scroll"><img src=" /global/assets/images/icon/icon_arrow-b_white.svg" alt=""></a><div id="j-btn-top"></div></main><footer id="footer"><div class="c-breadcrumb"><div class="c-breadcrumb__logo"><a href="/"><img src="/global/assets/images/logo/logo_white.svg"alt="スカパー！"></a></div><ul class="c-breadcrumb-list"><li><a href="/program/schedule/basic/">番組表</a></li><li><span>アニメシアターX(AT-X)</span></li></ul></div><!-- .l-footer include --><!-- /.l-footer include --></footer></div></div><script>// CMS接続先const CHANNEL_GENRE_API_URL="https://skyperfectv.co.jp/api/v1/channel-genres";const CHANNELS_API_URL="https://skyperfectv.co.jp/api/v1/channels";const DAM_GENRE_API="https://skyperfectv.co.jp/api/v1/dam-genres";const EVENTS_API="https://skyperfectv.co.jp/api/v1/events";const TREND_WORDS_API="https://skyperfectv.co.jp/api/v1/trendwords";const FREEDAY_API_URL="https://skyperfectv.co.jp/api/v1/free-day/channels";</script><script src="/global/assets/js/global.js"></script><script src="/program/schedule/js/polyfill.js"></script><script src="/program/schedule/js/vendor/js.cookie.min.js"></script><script src="/global/assets/js/jquery.min.js"></script><script src="/program/search/js/dayjs.min.js"></script><script src="/program/detail/js/ofi.min.js"></script><script type="module" src="/program/schedule/js/schedule.js?m=8"></script></body></html>
`

it('can generate valid url', () => {
  const result = url({ date, channel })
  expect(result).toBe('https://skyperfectv.co.jp/program/schedule/basic/channel:BS193/date:240801')
})

it('can parse response', () => {
  const result = parser({ date, channel, content }).map(p => {
    p.start = p.start.toJSON()
    p.stop = p.stop.toJSON()
    return p
  })

  expect(result).toMatchObject([
    {
      start: '2024-07-31T19:00:00.000Z', // UTC time
      stop: '2024-07-31T19:30:00.000Z', // UTC
      title: 'ヴァルキリードライヴマーメイド #06',
      image: 'https://pm-img-ap.skyperfectv.co.jp/uploads/thumbnail/image/11301805/S_BC929697780313_be7975d4e26a4cad9b89fc6c94807e38_20240613144158569.jpg'
    }
  ])
})


const empty = `
<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width"><meta name="format-detection" content="telephone=no"><title>番組表（アニメシアターX(AT-X)）｜スカパー！</title><!-- Google Tag Manager 2021/03--><script>(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-K73Z39');</script><!-- End Google Tag Manager 2021/03 --><meta property="og:title" content="番組表（アニメシアターX(AT-X)）｜スカパー！"><meta property="og:type" content="article"><meta property="og:description" content="「アニメシアターX(AT-X)」を見るならスカパー！で。直近30日間の放送予定を番組表形式でご確認いただけます。"><meta property="og:url" content="https://skyperfectv.co.jp/program/schedule/basic/channel:CS333/date:240801"><meta property="og:image" content="https://skyperfectv.co.jp/global/assets/images/fb_logo.jpg"><meta property="og:site_name" content="【公式】スカパー！スポーツ、音楽、アニメ、 映画をTVでもスマホでも視聴可"><meta property="og:locale" content="ja_JP"><meta property="fb:app_id" content="357325544353129"><meta name="description" content="「アニメシアターX(AT-X)」を見るならスカパー！で。直近30日間の放送予定を番組表形式でご確認いただけます。"><meta name="Keywords" content="番組,スカパー,テレビ,放送,予定表"><!-- ICON --><link rel="shortcut icon" href="/global/assets/images/fav/favicon.ico" type="image/vnd.microsoft.icon"><link rel="apple-touch-icon" href="/global/assets/images/fav/apple-touch-icon.png"><link href="/global/assets/css/global.css" rel="stylesheet"><link href="/assets/css/style.css" rel="stylesheet"><link href="/program/schedule/css/style.css?m=10" rel="stylesheet"><link rel="canonical" href="https://skyperfectv.co.jp/program/schedule/basic/channel:CS333/"></head><body class="fw"><!-- Google Tag Manager (noscript) 2021/3 --><noscript><iframesrc="https: //www.googletagmanager.com/ns.html?id=GTM-K73Z39" height="0" width="0"style="display:none;visibility:hidden"></iframe></noscript><input type="hidden" id="basic_plan_flg"value="0" /><!-- End Google Tag Manager (noscript) 2021/3 --><!-- .l-header include --><div id="header"></div><!-- /.l-header include --><div class="l-container" id="j-container"><!-- .l-side include --><div id="side"></div><!-- /.l-side include --><div class="l-container__main" id="j-container-main"><main><div id="mainContents"><div id="js-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストを更新中です。</p></div></div><div id="js-regist-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストに登録中です。</p></div></div><div id="js-delete-loading" class="p-loading"><div class="p-loading__inner"><img class="p-loading__img"src="/global/assets/images/icon/icon_loading.svg" alt=""><p class="p-loading__txt">現在マイリストから削除中です。</p></div></div><!-- コンテンツをいれてください --><!-- 選択されたサービス--><input type="hidden" id="selectedService"value="basic"><!-- 選択されたチャンネル--><input type="hidden" id="selectedChannel"value="CS333"><!-- 選択された日付--><input type="hidden" id="selectedDate"value="240801"><!-- チャンネルアイコン--><input type="hidden" id="channelIcon" value=""><div id="js-schedule-wrapper" class="p-schedule-wrapper"><div id="js-hdr-normal" class="p-hdr p-hdr--normal"><div class="p-hdr__wrap"><div class="p-hdr__inner"><h1 class="p-hdr__ttl">番組放送予定表</h1><div class="p-hdr__box js-p-hdr-box"><div class="p-status"><div class="p-status__box"><div class="p-status__id"></div><div class="p-status__name"><spanclass="p-status__name__ttl"></span><spanclass="p-status__name__ico"style="display:none"><img src="/global/assets/images/icon/icon_plan_basic.svg"alt="基本プラン"></span></div></div></div><div class="p-switch p-hdr__switch"><button type="button"class="p-switch__btn js-switch-btn"><spanclass="p-switch__label">チャンネル選択</span><iclass="p-switch__icon"><svg><use href="#menu"></use></svg></i></button></div></div><div class="p-hdr__cal p-calendar js-cal"><buttonclass="p-calendar__btnjs-cal-toggle"><svg id="編集モード" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 236 262"><defs><style>.cls-1 {fill: #fff;}.cls-2 {fill: #000;}</style></defs><rect class="cls-1" x="22" y="45" width="187.8" height="190.8" /><rect class="cls-2" x="85.3" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="194.6" width="26.2" height="26.2" /><path class="cls-2"d="M236,52.4V235.8A26.23,26.23,0,0,1,209.8,262H26.2A26.23,26.23,0,0,1,0,235.8H0L.1,52.4a26.18,26.18,0,0,1,26-26.2H39.3V0H65.5V26.2H170.4V0h26.2V26.2h13.1A26.25,26.25,0,0,1,236,52.4ZM26.2,78.6H209.8V52.4H26.2ZM209.8,235.8v-131H26.2v131Z" /></svg></button><div class="p-calendar__main js-calbox"><div class="p-calendar__month"><spanclass="p-calendar__month-num"></span>月</div><div class="p-calendar__desc">選択した日付から1週間の番組表を表示します</div><div class="p-calendar__content"><table><thead><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr></thead><tbody></tbody></table></div></div></div></div></div></div><div id="js-hdr" class="p-hdr p-hdr--small"><div class="p-hdr__wrap"><div class="p-hdr__inner"><div class="p-hdr__ttl">番組放送予定表</div><div class="p-hdr__box js-p-hdr-box"><div class="p-status p-status--small"><div class="p-status__box"><div class="p-status__id"></div><div class="p-status__name"><spanclass="p-status__name__ttl"></span><spanclass="p-status__name__ico"style="display:none"><img src="/global/assets/images/icon/icon_plan_basic.svg"alt="基本プラン"></span></div></div></div><div class="p-switch p-hdr__switch"><button type="button"class="p-switch__btn js-switch-btn"><spanclass="p-switch__label">チャンネル選択</span><iclass="p-switch__icon"><svg><use href="#menu"></use></svg></i></button></div></div><div class="p-hdr__cal p-calendar js-cal"><buttonclass="p-calendar__btnjs-cal-toggle"><svg id="編集モード" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 236 262"><defs><style>.cls-1 {fill: #fff;}.cls-2 {fill: #000;}</style></defs><rect class="cls-1" x="22" y="45" width="187.8" height="190.8" /><rect class="cls-2" x="85.3" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="119.8" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="163.6" y="157.2" width="26.2" height="26.2" /><rect class="cls-2" x="46.2" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="85.3" y="194.6" width="26.2" height="26.2" /><rect class="cls-2" x="124.4" y="194.6" width="26.2" height="26.2" /><path class="cls-2"d="M236,52.4V235.8A26.23,26.23,0,0,1,209.8,262H26.2A26.23,26.23,0,0,1,0,235.8H0L.1,52.4a26.18,26.18,0,0,1,26-26.2H39.3V0H65.5V26.2H170.4V0h26.2V26.2h13.1A26.25,26.25,0,0,1,236,52.4ZM26.2,78.6H209.8V52.4H26.2ZM209.8,235.8v-131H26.2v131Z" /></svg></button><div class="p-calendar__main js-calbox"><div class="p-calendar__month"><spanclass="p-calendar__month-num"></span>月</div><div class="p-calendar__desc">選択した日付から1週間の番組表を表示します</div><div class="p-calendar__content"><table><thead><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr></thead><tbody></tbody></table></div></div></div></div></div></div><div><div class="p-body"><div id="js-date-row" class="p-date-row"><div id="js-date-row-container" class="p-date-row__inner"><div id="js-date-row-inner2" class="p-date-row__inner2"><table id="js-date-row-item" class="p-schedule__table"><thead id="js-date-row-put" class="p-schedule__whdr"></thead></table></div></div></div><div id="js-pager" class="p-pager"><ahref="/program/schedule/basic/channel:CS333/date:240801"class="js-date-row-btn p-pager__btn p-pager__btn--prev is-disabled"><div class="p-pager__btn-inner"><p><i class="p-pager__btn__icon"></i><span>前週</span></p></div></a><a href="/program/schedule/basic/channel:CS333/date:240808"class="js-date-row-btn p-pager__btn p-pager__btn--next"><div class="p-pager__btn-inner"><p><i class="p-pager__btn__icon"></i><span>次週</span></p></div></a></div><div class="p-schedule"><div id="js-schedule-container" class="p-schedule__inner"><div id="js-schedule" class="p-schedule__main"><div id="js-schedule-inner" class="p-schedule__wtable"><div id="js-tlabel" class="p-tlabel"><div class="p-tlabel__inner"><p id="js-am-label" class="p-tlabel__item">午前（<span>4</span>時～）</p><p id="js-pm-label" class="p-tlabel__item">午後（<span>12</span>時～）</p><p id="js-md-label" class="p-tlabel__item">深夜（<span>24</span>時～）</p></div></div><div class="p-date-row-abs"><div class="p-date-row-abs__inner"><div class="p-date-row-abs__inner2"><div id="js-date-row-abs-container"class="p-date-row-abs__cont"><table class="p-schedule__table"><thead id="js-date-row-put-abs"class="p-schedule__whdr"></thead></table></div></div></div></div><table id="js-schedule-table" class="p-schedule__table"><thead id="js-schedule-date" class="p-schedule__whdr"><tr id="js-schedule-date-row"><th class=""><div class="p-schedule__hdr" data-date="2024-08-01"><time datetime="2024-08-01"class="p-schedule__on"><!--無料の日タグ--><bclass="p-schedule__m">08</b><bclass="p-schedule__sep">/</b><bclass="p-schedule__d">01</b><spanclass="p-schedule__w">(木)</span></time></div></th><th class=""><div class="p-schedule__hdr" data-date="2024-08-02"><time datetime="2024-08-02"class="p-schedule__on"><!--無料の日タグ--><bclass="p-schedule__m">08</b><bclass="p-schedule__sep">/</b><bclass="p-schedule__d">02</b><spanclass="p-schedule__w">(金)</span></time></div></th></tr></thead><tbody><tr id="js-am"><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr><tr id="js-pm"><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr><tr id="js-md"><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td><td><div class="p-schedule__cellheight"><ul class="p-program"></ul></div></td></tr></tbody></table></div></div></div></div></div><div class="p-sticky-placeholder"></div><div id="js-floating" class="p-floating"><div id="js-app-download" class="p-app-download"><div class="p-app-download__bnrp-img-disable"><button id="js-app-download__close"class="p-app-download__close" type="button"><img src=" /program/schedule/images/btn_close2.png" alt="閉じる"></button><ahref=" /service/portal/bangumiapp/"><img src=" /program/schedule/images/btn_app.png" alt="newAppBannerImg"width="468" class="is-pc"><img src=" /program/schedule/images/btn_app_sp.png" alt="newAppBannerImg"width="468" class="is-sp"><img src=" /program/schedule/images/img_opacity.gif" alt=""class="p-img-disable__overlay"></a></div></div></div></div><div id="js-endpoint"></div><svg class="p-symbols"><defs><symbol id="star" viewBox="0 0 21.5 20.5"><path fill-rule="evenodd" stroke-width="1px" stroke-linecap="butt"stroke-linejoin="miter"d="M14.963,12.496 L16.75,18.987 L10.249,15.922 L4.424,18.987 L5.536,12.496 L0.823,7.899 L7.337,6.951 L10.249,1.45 L13.162,6.951 L19.677,7.899 L14.963,12.496 Z" /></symbol><symbol id="menu" viewBox="0 0 4 18"><path fill-rule="evenodd"d="M2.104,10.910 C1.108,10.910 0.305,10.106 0.305,9.111 C0.305,8.116 1.108,7.312 2.104,7.312 C3.99,7.312 3.903,8.116 3.903,9.111 C3.903,10.106 3.99,10.910 2.104,10.910 ZM2.104,4.510 C1.108,4.510 0.305,3.707 0.305,2.711 C0.305,1.716 1.108,0.912 2.104,0.912 C3.99,0.912 3.903,1.716 3.903,2.711 C3.903,3.707 3.99,4.510 2.104,4.510 ZM2.104,13.712 C3.99,13.712 3.903,14.515 3.903,15.511 C3.903,16.506 3.99,17.310 2.104,17.310 C1.108,17.310 0.305,16.506 0.305,15.511 C0.305,14.515 1.108,13.712 2.104,13.712 Z" /></symbol></defs></svg></div><div id="js-modal" class="p-modal"><div class="p-modal__overlay js-modal-close"></div><div class="p-modal__window"><button class="p-modal__close js-modal-close"><img src=" /program/schedule/images/btn_close3.png" alt="閉じる"></button><div class="p-modal__content"><div class="p-tab js-tab"><div class="p-tab__wbtn"><button type="button" value="junle"class="js-tab-btn p-tab__btn is-active">ジャンル</button><button type="button"value="channel-num" class="js-tab-btn p-tab__btn ">チャンネル番号順</button></div><div class="p-modal__main"><div class="p-modal__main-inner"><div id="junle" class="p-tab__body js-tab-unit js-filter-unit"><div class="p-tab__select p-tab__select--sp p-tab__selectelm"><selectclass="js-filter-select"><option value="">すべて</option></select></div><div class="p-tab__select p-tab__select--col6 p-tab__select--pc"><buttonvalue="" class="js-filter p-tab__filter is-active">すべて</button></div><div class="p-tab__search"><div class="p-tab__search-col"><input type="text"placeholder="チャンネル名で検索" class="p-tab__search-q"><buttontype="button" class="p-tab__search-btn"></button></div></div><div id="channel_genre"class="js-wrap-filter-item p-tab__wrap-filter-item"></div></div><div id="channel-num"class="p-tab__body js-tab-unit js-filter-unit is-hide"><div id="bscs_tab" class="p-tab__select p-tab__select--col3"><buttonvalue=""class="js-filter p-tab__filteris-active">すべて</button><buttonvalue="bs" class="js-filter p-tab__filter">BS</button><buttonvalue="cs" class="js-filter p-tab__filter">CS</button></div><div id="channel_order"class="js-wrap-filter-item p-tab__wrap-filter-item"></div></div><div class="p-modal__wbtn"><a href="/program/schedule/premium/"class="p-modal__btn">プレミアムサービス/<br>プレミアムサービス光のチャンネル一覧</a></div></div></div></div></div></div></div><div class="p-notice p-notice--foot"><p class="p-notice__inner"><iclass="p-notice__icon"></i><spanclass="p-notice__txt">番組情報は予告なく変更となる場合がありますのでご了承ください</span></p></div><div class="l-inner"><div class="c-note">・このサイトでは、当日から1週間分はEPGと同等の番組情報が表示され、その先1ヶ月後まではガイド誌（有料）と同等の番組情報が表示されます。番組や放送予定は予告なく変更される場合がありますのでご了承ください。<br>・このサイトは、ウェブブラウザーMicrosoftEdge最新版、GoogleChrome最新版、Firefox最新版、Safari最新版での動作を確認しております。上記以外のウェブブラウザーで閲覧されますと、表示の乱れや予期せぬ動作を起こす場合がございますので、予めご了承ください。</div><div class="c-copyright js-copyright" id="j-copyright">©橋本悠／集英社・リリサ製作委員会/©鍋敷/アース・スターエンターテイメント/俺は全てを【パリイ】する製作委員会/©AT-X　©天原・masha／株式会社ＫＡＤＯＫＡＷＡ／異種族レビュアーズ製作委員会/©THEMARGINALSERVICE PROJECT/©荒巻義雄・徳間書店/©2015上栖綴人・Nitroplus/ＫＡＤＯＫＡＷＡ/「新妹魔王の契約者BURST」製作委員会/©中村力斗・野澤ゆき子／集英社・君のことが大大大大大好きな製作委員会/©2018上栖綴人・Nitroplus/KADOKAWA/「新妹魔王の契約者DEPARTURES」製作委員会/© 小林尽／講談社・マーベラス・キングレコード・創通</div></div><div><!-- 星ボタンクリックで出てくるメッセージ --><div id="js-mystar-fail" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg">##ERROR_MSG##</p></div><div id="js-mystar-fail_del" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg"><b>##ERROR_MSG##</b></p></div><div id="js-mystar-nothing" class="p-mystar p-mystar--fail"><buttonclass="p-mystar__close-redjs-mystar-close"></button><p class="p-mystar__msg"><b>##ERROR_MSG##</b></p></div><div id="js-mystar-confirm" class="p-mystar p-mystar--confirm"><buttonclass="p-mystar__closejs-mystar-close"></button><p class="p-mystar__msg"><b>マイリストから削除してもよいですか？</b></p><div class="p-mystar__wbtn"><button class="p-mystar__btn js-confirm-btn"value="y">はい</button><button class="p-mystar__btn js-confirm-btn"value="n">いいえ</button></div></div><div id="js-mystar-notlogged" class="p-mystar p-mystar--notlogged"><buttonclass="p-mystar__closejs-mystar-close"></button><dl><dt class="p-mystar__ttl"><b>ログインをしてお気に入り番組を登録しよう！</b></dt><dd class="p-mystar__txt">Myスカパー！にログインをすると、マイリストにお気に入り番組リストを作成することができます！</dd></dl><div class="p-mystar__wbtn"><buttondata-login_url="https://my.skyperfectv.co.jp/login/?bk_url=http%3A%2F%2Fskyperfectv.co.jp%2Fprogram%2Fschedule%2Fbasic%2Fchannel%3ACS333%2Fdate%3A240801"class="p-mystar__btn p-mystar__btn--login js-confirm-btn"value="to_login">ログイン</button><ahref="https://my.skyperfectv.co.jp/entry/signup/"class="p-mystar__btn">新規会員登録</a></div></div><div id="js-mystar-over" class="p-mystar p-mystar--over js-dautohide"><buttonclass="p-mystar__close js-mystar-close"></button><dl><dt class="p-mystar__ttl"><b>マイリストに番組を登録できません</b></dt><dd class="p-mystar__txt">##ERROR_MSG##</dd></dl></div><div id="js-overlay" class="p-overlay"></div></div></div><a href="#" class="c-btn-top j-smooth-scroll"><img src=" /global/assets/images/icon/icon_arrow-b_white.svg" alt=""></a><div id="j-btn-top"></div></main><footer id="footer"><div class="c-breadcrumb"><div class="c-breadcrumb__logo"><a href="/"><img src="/global/assets/images/logo/logo_white.svg"alt="スカパー！"></a></div><ul class="c-breadcrumb-list"><li><a href="/program/schedule/basic/">番組表</a></li><li><span>アニメシアターX(AT-X)</span></li></ul></div><!-- .l-footer include --><!-- /.l-footer include --></footer></div></div><script>// CMS接続先const CHANNEL_GENRE_API_URL="https://skyperfectv.co.jp/api/v1/channel-genres";const CHANNELS_API_URL="https://skyperfectv.co.jp/api/v1/channels";const DAM_GENRE_API="https://skyperfectv.co.jp/api/v1/dam-genres";const EVENTS_API="https://skyperfectv.co.jp/api/v1/events";const TREND_WORDS_API="https://skyperfectv.co.jp/api/v1/trendwords";const FREEDAY_API_URL="https://skyperfectv.co.jp/api/v1/free-day/channels";</script><script src="/global/assets/js/global.js"></script><script src="/program/schedule/js/polyfill.js"></script><script src="/program/schedule/js/vendor/js.cookie.min.js"></script><script src="/global/assets/js/jquery.min.js"></script><script src="/program/search/js/dayjs.min.js"></script><script src="/program/detail/js/ofi.min.js"></script><script type="module" src="/program/schedule/js/schedule.js?m=8"></script></body></html>
`

it('can handle empty guide', () => {
  const result = parser({
    date,
    channel,
    content: empty
  })
  expect(result).toMatchObject([])
})

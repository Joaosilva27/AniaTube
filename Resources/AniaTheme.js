// AniaTube's pink theme for YouTube Music.
//
// Injected at document start. The style sheet is written into the page and
// re-applied after YouTube Music's single-page navigations. Everything is
// scoped to the pink palette; playback, login, and the page logic are untouched.
(function () {
  'use strict';

  var STYLE_ID = 'aniatube-pink-theme';

  var css = `
html, html[dark], html[music-web-color-migration] {
  color-scheme: light !important;

  /* Base palette (old and new YouTube Music token sets) */
  --ytmusic-color-black1: #5b3247 !important;
  --ytmusic-color-black2: #ffe6f0 !important;
  --ytmusic-color-black4: #fff7fa !important;
  --ytmusic-color-blackpure: #2d1722 !important;
  --ytmusic-color-white1: #472637 !important;
  --ytmusic-color-white1-alpha95: rgba(71, 38, 55, 0.95) !important;
  --ytmusic-color-white1-alpha70: rgba(71, 38, 55, 0.72) !important;
  --ytmusic-color-white1-alpha50: rgba(71, 38, 55, 0.56) !important;
  --ytmusic-color-white1-alpha30: rgba(71, 38, 55, 0.34) !important;
  --ytmusic-color-white1-alpha25: rgba(71, 38, 55, 0.28) !important;
  --ytmusic-color-white1-alpha20: rgba(71, 38, 55, 0.22) !important;
  --ytmusic-color-white1-alpha15: rgba(71, 38, 55, 0.17) !important;
  --ytmusic-color-white1-alpha10: rgba(71, 38, 55, 0.11) !important;
  --ytmusic-color-white1-alpha0: rgba(71, 38, 55, 0) !important;
  --ytmusic-color-white-opacity-0-5: rgba(71, 38, 55, 0.52) !important;
  --ytmusic-color-white-opacity-0-05: rgba(71, 38, 55, 0.06) !important;
  --ytmusic-color-blackpure-alpha0: rgba(45, 23, 34, 0) !important;
  --ytmusic-color-blackpure-alpha10: rgba(45, 23, 34, 0.08) !important;
  --ytmusic-color-blackpure-alpha60: rgba(45, 23, 34, 0.55) !important;
  --ytmusic-color-blackpure-alpha65: rgba(45, 23, 34, 0.62) !important;
  --ytmusic-color-black-opacity-0-4: rgba(45, 23, 34, 0.34) !important;
  --ytmusic-color-mediumred-alpha90: rgba(214, 63, 122, 0.92) !important;

  --ytmusic-color-grey2: #7d5668 !important;
  --ytmusic-color-grey3: #9a7183 !important;
  --ytmusic-color-grey4: #b99aa6 !important;
  --ytmusic-color-grey5: #d7bcc6 !important;
  --ytmusic-color-youtubered: #ff5f97 !important;
  --ytmusic-color-lightred: #ff5f97 !important;
  --ytmusic-color-mediumred: #f44f88 !important;
  --ytmusic-color-lightblue: #d63f7a !important;
  --ytmusic-color-lightgreen: #7fbfa2 !important;
  --ytmusic-color-yellow: #ffc46b !important;
  --ytmusic-color-badge: #d63f7a !important;

  /* New migration tokens */
  --ytmusic-background: #fff7fa !important;
  --ytmusic-background-overlay-background: #fff7fa !important;
  --ytmusic-brand-background-solid: #ffeef5 !important;
  --ytmusic-general-background-a: #ffeef5 !important;
  --ytmusic-general-background-b: #ffe9f2 !important;
  --ytmusic-general-background-c: #fff7fa !important;
  --ytmusic-general-background-d: #ffe3ee !important;
  --ytmusic-general-background-e: #ffdbe9 !important;
  --ytmusic-nav-bar: #fff0f6 !important;
  --ytmusic-detail-header: #fff7fa !important;
  --ytmusic-player-page-background: #fff7fa !important;
  --ytmusic-player-bar-background: #fff0f6 !important;
  --ytmusic-player-bar-ink-color: #472637 !important;
  --ytmusic-player-bar-container-color: rgba(214, 63, 122, 0.22) !important;
  --ytmusic-player-bar-disabled-secondary-color: #b99aa6 !important;
  --ytmusic-player-bar-repeat-disabled: #d7bcc6 !important;
  --ytmusic-player-controls-button-disabled: #d7bcc6 !important;
  --ytmusic-progress-container: rgba(214, 63, 122, 0.20) !important;
  --ytmusic-text-primary: #472637 !important;
  --ytmusic-text-primary-inverse: #fff7fa !important;
  --ytmusic-text-secondary: #7d5668 !important;
  --ytmusic-text-tertiary: #9a7183 !important;
  --ytmusic-text-disabled: #b99aa6 !important;
  --ytmusic-icon-inactive: #9a7183 !important;
  --ytmusic-icon-disabled: #cbb0bb !important;
  --ytmusic-divider: rgba(214, 63, 122, 0.18) !important;
  --ytmusic-guide-divider: rgba(214, 63, 122, 0.14) !important;
  --ytmusic-guide-hover: rgba(255, 111, 165, 0.14) !important;
  --ytmusic-guide-entry-focus-border: #d63f7a !important;
  --ytmusic-guide-signin-promo-text-secondary: #7d5668 !important;
  --ytmusic-focus-active: #d63f7a !important;
  --ytmusic-call-to-action: #d63f7a !important;
  --ytmusic-call-to-action-disclaimer: #8a6072 !important;
  --ytmusic-playback-progress-color: #ff5f97 !important;
  --ytmusic-play-pause-button-background: #ff6fa5 !important;
  --ytmusic-play-button-disabled-icon-color: #e2c4cf !important;
  --ytmusic-search-background: #ffe4ee !important;
  --ytmusic-search-border: #f4bfd3 !important;
  --ytmusic-search-bar-background-bauhaus: #ffe4ee !important;
  --ytmusic-search-bar-border-bauhaus: #f4bfd3 !important;
  --ytmusic-search-box-text-secondary: #7d5668 !important;
  --ytmusic-search-suggestion-text-secondary: #7d5668 !important;
  --ytmusic-search-suggestion-focus-active: #d63f7a !important;
  --ytmusic-search-suggestion-focus-active-background: #ffe4ee !important;
  --ytmusic-search-suggestion-icon-color: #9a7183 !important;
  --ytmusic-explore-chip-background: #ffe4ee !important;
  --ytmusic-badge-chip-background: #ffe4ee !important;
  --ytmusic-badge-chip-inactive-hover: #ffd7e6 !important;
  --ytmusic-toggle-button-chip-border-color: #e7a8bf !important;
  --ytmusic-toggle-button-chip-active-background: #ff5f97 !important;
  --ytmusic-dropdown-background: #fff7fa !important;
  --ytmusic-dropdown-border-color: #f4bfd3 !important;
  --ytmusic-dropdown-item-hover-background: #ffe4ee !important;
  --ytmusic-menu-popup-background: #fff7fa !important;
  --ytmusic-menu-renderer-button-hover-background: #ffe4ee !important;
  --ytmusic-dialog-background-color: #fff7fa !important;
  --ytmusic-dialog-scrim-color: rgba(74, 40, 56, 0.42) !important;
  --ytmusic-confirm-dialog-outline: #f4bfd3 !important;
  --ytmusic-alert-with-actions-background: #fff7fa !important;
  --ytmusic-alert-with-actions-header-text: #472637 !important;
  --ytmusic-footer-background: #ffeaf2 !important;
  --ytmusic-horizontal-action-card-background: #fff7fa !important;
  --ytmusic-inverted-background: #472637 !important;
  --ytmusic-overlay-background-light: rgba(255, 247, 250, 0.9) !important;
  --ytmusic-overlay-background-medium: rgba(71, 38, 55, 0.62) !important;
  --ytmusic-overlay-text-primary: #472637 !important;
  --ytmusic-overlay-text-secondary: #7d5668 !important;
  --ytmusic-overlay-text-disabled: #b99aa6 !important;
  --ytmusic-overlay-button-primary: rgba(255, 111, 165, 0.26) !important;
  --ytmusic-overlay-button-secondary: rgba(255, 111, 165, 0.14) !important;
  --ytmusic-fullscreen-scrim-background: rgba(74, 40, 56, 0.6) !important;
  --ytmusic-responsive-header-fullscreen-dialog-scrim: rgba(74, 40, 56, 0.6) !important;
  --ytmusic-responsive-header-primary-button-background: #ff6fa5 !important;
  --ytmusic-responsive-header-fullscreen-art-shadow: rgba(214, 63, 122, 0.22) !important;
  --ytmusic-sticky-element-shadow-color: rgba(122, 58, 86, 0.16) !important;
  --ytmusic-carousel-shelf-button-disabled: #d7bcc6 !important;
  --ytmusic-close-button-color: #8a6072 !important;
  --ytmusic-color-close-button: #8a6072 !important;
  --ytmusic-color-input-border: #e7a8bf !important;
  --ytmusic-outline-button-border-color: #e7a8bf !important;
  --ytmusic-navigation-button-outline-color: #e7a8bf !important;
  --ytmusic-immersive-carousel-button-border: #e7a8bf !important;
  --ytmusic-shelf-bottom-button-border-color: #e7a8bf !important;
  --ytmusic-multiselect-form-item-border-color: #e7a8bf !important;
  --ytmusic-multiselect-form-item-hover-background-color: #ffe4ee !important;
  --ytmusic-multiselect-form-footer-background: #ffeaf2 !important;
  --ytmusic-responsive-list-item-checked-background-bauhaus: #ffe4ee !important;
  --ytmusic-message-renderer-icon-color: #9a7183 !important;
  --ytmusic-message-renderer-text-color: #7d5668 !important;
  --ytmusic-inline-badge-color: #8a6072 !important;
  --ytmusic-description-shelf-renderer-description-color: #7d5668 !important;
  --ytmusic-two-column-browse-results-description-color: #7d5668 !important;
  --ytmusic-wordmark-text: #d63f7a !important;
  --ytmusic-brand-link-text: #d63f7a !important;
  --ytmusic-static-brand-red: #ff5f97 !important;
  --ytmusic-static-brand-white: #fff7fa !important;
  --ytmusic-static-brand-black: #472637 !important;
  --ytmusic-inactive-tab: #8a6072 !important;
  --ytmusic-ten-percent-layer: rgba(255, 111, 165, 0.10) !important;
  --ytmusic-touch-response: rgba(255, 111, 165, 0.14) !important;
  --ytmusic-setting-item-toggle-active: #ff6fa5 !important;
  --ytmusic-setting-item-toggle-inactive-button: #d7bcc6 !important;
  --ytmusic-setting-item-toggle-inactive-bar: #ffe4ee !important;
}

/* Chrome and surfaces */
html, body, ytmusic-app, ytmusic-app-layout, #content, #main-panel,
ytmusic-browse-response, ytmusic-search-page, ytmusic-library-page,
ytmusic-playlist-page, ytmusic-album-page, ytmusic-artist-page,
ytmusic-detail-header, ytmusic-player-page {
  background-color: #fff7fa !important;
  color: #472637 !important;
}

body {
  background-image:
    radial-gradient(circle at 88% 4%, rgba(255, 171, 205, 0.26), transparent 30%),
    radial-gradient(circle at 4% 96%, rgba(205, 180, 255, 0.20), transparent 26%) !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100vh !important;
  background-attachment: scroll !important;
}

#content, #main-panel, ytmusic-browse-response, ytmusic-section-list-renderer {
  background-color: transparent !important;
}

ytmusic-nav-bar, #nav-bar-background {
  background: rgba(255, 240, 246, 0.96) !important;
  border-bottom: 1px solid #f6cfdf !important;
  box-shadow: 0 1px 12px rgba(214, 63, 122, 0.08) !important;
}

ytmusic-guide-renderer, #guide-wrapper, #guide-content, #guide {
  background: #fff1f7 !important;
  border-right: 1px solid #f8d9e4 !important;
}

ytmusic-player-bar, #player-bar {
  background: #fff0f6 !important;
  border-top: 1px solid #f6cfdf !important;
  border-radius: 18px 18px 0 0 !important;
  box-shadow: 0 -8px 26px rgba(214, 63, 122, 0.10) !important;
}

/* The full-bleed hero artwork sits under a black fade. Hide it so the blush
   gradient is the backdrop on home, artist, and playlist pages. */
ytmusic-fullbleed-thumbnail-renderer,
ytmusic-fullbleed-thumbnail-renderer .image {
  display: none !important;
}

/* Hero and shelf headings switch to plum for contrast on blush. */
ytmusic-carousel-shelf-renderer .header,
ytmusic-carousel-shelf-renderer .header *,
ytmusic-shelf-renderer .header,
ytmusic-shelf-renderer .header *,
ytmusic-section-list-renderer .subtitle {
  color: #7d5668 !important;
}
ytmusic-carousel-shelf-renderer .header .title,
ytmusic-shelf-renderer .header .title {
  color: #472637 !important;
}

/* The home/browse hero uses a hardcoded black fade; replace it with blush.
   YouTube sets a 368px background-size and repeat on this element, so pin the
   gradient to the whole box or the percentage stops tile into stripes. */
.background-gradient,
ytmusic-browse-response .background-gradient {
  background-image: linear-gradient(180deg,
    rgba(255, 171, 205, 0.50) 0%,
    rgba(255, 226, 239, 0.32) 46%,
    rgba(255, 247, 250, 0) 80%) !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  background-origin: border-box !important;
  background-position: 0 0 !important;
}

/* The guide's sign-in promo arrives with a translucent white button whose
   label is hardcoded near-white. Give it an actual pink button instead. */
ytmusic-guide-signin-promo-renderer button {
  background: #ff6fa5 !important;
  color: #ffffff !important;
  border-radius: 999px !important;
  box-shadow: 0 3px 10px rgba(201, 75, 123, 0.22) !important;
}
ytmusic-guide-signin-promo-renderer button *,
ytmusic-guide-signin-promo-renderer .ytSpecButtonShapeNextButtonTextContent,
ytmusic-guide-signin-promo-renderer .ytAttributedStringHost {
  color: #ffffff !important;
}

/* Mood chips: solid blush pills with a deeper rose label. */
ytmusic-chip-cloud-chip-renderer a.yt-simple-endpoint,
ytmusic-chip-cloud-chip-renderer .gradient-box {
  background: #ffe4ee !important;
  color: #b23a6a !important;
  border: 1px solid #f4bfd3 !important;
  border-radius: 999px !important;
  box-shadow: 0 1px 3px rgba(201, 75, 123, 0.06) !important;
}
ytmusic-chip-cloud-chip-renderer a.yt-simple-endpoint:hover {
  background: #ffd3e4 !important;
}

ytmusic-search-box, #search-box, .search-box {
  background: #ffe4ee !important;
  border: 1px solid #f4bfd3 !important;
  border-radius: 999px !important;
  box-shadow: inset 0 1px 2px rgba(201, 75, 123, 0.05) !important;
}

ytmusic-search-box #input, ytmusic-search-box input {
  border-radius: 999px !important;
}

/* Sliders and progress */
tp-yt-paper-slider {
  --paper-slider-active-color: #ff5f97 !important;
  --paper-slider-knob-color: #ff5f97 !important;
  --paper-slider-knob-start-color: #ff5f97 !important;
  --paper-slider-knob-start-border-color: #ff5f97 !important;
  --paper-slider-container-color: rgba(214, 63, 122, 0.22) !important;
  --paper-slider-secondary-color: rgba(214, 63, 122, 0.34) !important;
  --paper-slider-pin-color: #ff5f97 !important;
  --paper-slider-input: #ff5f97 !important;
}

ytmusic-progress-bar, #progress-bar {
  --ytmusic-playback-progress-color: #ff5f97 !important;
}

/* Album art: soften the corners without turning artist avatars into squares. */
ytmusic-two-row-item-renderer .image,
ytmusic-responsive-list-item-renderer .image,
ytmusic-player-bar .image,
ytmusic-card-shelf-renderer .image,
ytmusic-grid-element-renderer .image,
ytmusic-carousel-shelf-renderer .image {
  border-radius: 12px !important;
  overflow: hidden !important;
}

yt-img-shadow {
  border-radius: inherit !important;
  overflow: hidden;
}

ytmusic-two-row-item-renderer .image,
ytmusic-grid-element-renderer .image {
  transition: box-shadow 160ms ease, transform 160ms ease !important;
}

ytmusic-two-row-item-renderer:hover .image,
ytmusic-grid-element-renderer:hover .image {
  box-shadow: 0 10px 24px rgba(214, 63, 122, 0.18) !important;
  transform: translateY(-2px);
}

/* Rounded chips and pills everywhere. */
ytmusic-chip-cloud-chip-renderer,
ytmusic-chip-cloud-chip-renderer #chip,
tp-yt-paper-chip {
  border-radius: 999px !important;
}

ytmusic-play-button-renderer #button-shape,
ytmusic-play-button-renderer #play-button {
  background: #ff6fa5 !important;
  color: #fff !important;
}

/* Replace the white YouTube Music wordmark with a rose AniaTube wordmark. */
ytmusic-logo {
  display: inline-flex !important;
  align-items: center !important;
  width: auto !important;
  height: 24px !important;
}
ytmusic-logo picture {
  display: none !important;
}
ytmusic-logo a {
  display: inline-flex !important;
  align-items: center !important;
  width: auto !important;
  height: 24px !important;
}
ytmusic-logo a::before {
  content: "AniaTube";
  font-family: "YouTube Sans", "Roboto", -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.55px;
  color: #c94b7b;
  line-height: 1;
}
/* The badge lives inside the anchor so the flex row centres it with the
   wordmark; as a sibling of the anchor it sat a couple of pixels low. */
ytmusic-logo a::after {
  content: "";
  flex: 0 0 auto;
  width: 26px;
  height: 18px;
  margin-left: 8px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 20'%3E%3Crect width='28' height='20' rx='5' fill='%23ff5f97'/%3E%3Cpath d='M11 5.5L18 10L11 14.5Z' fill='%23ffffff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* The hover play button on guide entries ships a white circle with an
   inline white icon colour, so the triangle vanished into the circle.
   Use the same rose fill and white glyph as the other play buttons. */
ytmusic-guide-entry-renderer ytmusic-play-button-renderer#play-button {
  --ytmusic-play-button-icon-color: #ffffff !important;
  --ytmusic-play-button-background-color: #ff6fa5 !important;
  background: #ff6fa5 !important;
  color: #ffffff !important;
}
ytmusic-guide-entry-renderer ytmusic-play-button-renderer#play-button *,
ytmusic-guide-entry-renderer ytmusic-play-button-renderer#play-button yt-icon,
ytmusic-guide-entry-renderer ytmusic-play-button-renderer#play-button svg,
ytmusic-guide-entry-renderer ytmusic-play-button-renderer#play-button svg path {
  color: #ffffff !important;
  fill: #ffffff !important;
}

/* "New playlist" in the guide is a new-spec button whose label is hardcoded
   near-white on a translucent white pill, so it disappears on the blush
   sidebar. Give it the same blush pill and rose label as the mood chips. */
ytmusic-guide-section-renderer #buttons yt-button-renderer button {
  background: #ffe4ee !important;
  border: 1px solid #f4bfd3 !important;
  border-radius: 999px !important;
  color: #b23a6a !important;
  box-shadow: 0 1px 3px rgba(201, 75, 123, 0.06) !important;
}
ytmusic-guide-section-renderer #buttons yt-button-renderer button *,
ytmusic-guide-section-renderer #buttons yt-button-renderer .ytAttributedStringHost,
ytmusic-guide-section-renderer #buttons yt-button-renderer yt-icon,
ytmusic-guide-section-renderer #buttons yt-button-renderer svg,
ytmusic-guide-section-renderer #buttons yt-button-renderer svg path {
  color: #b23a6a !important;
  fill: #b23a6a !important;
}
ytmusic-guide-section-renderer #buttons yt-button-renderer button:hover {
  background: #ffd6e6 !important;
}

/* Player page tabs (Up next / Lyrics / Comments / Related) are hardcoded
   white for the dark player; render them in plum and rose instead. */
ytmusic-player-page tp-yt-paper-tab.tab-header,
ytmusic-player-page tp-yt-paper-tab.tab-header .tab-content {
  color: #7d5668 !important;
  opacity: 1 !important;
}
ytmusic-player-page tp-yt-paper-tab.tab-header[aria-selected="true"],
ytmusic-player-page tp-yt-paper-tab.tab-header.iron-selected,
ytmusic-player-page tp-yt-paper-tab.tab-header[aria-selected="true"] .tab-content,
ytmusic-player-page tp-yt-paper-tab.tab-header.iron-selected .tab-content {
  color: #c94b7b !important;
}
ytmusic-player-page tp-yt-paper-tabs #selectionBar,
ytmusic-player-page tp-yt-paper-tab #selectionBar {
  background: #ff6fa5 !important;
}

/* The like/dislike pair and the overflow menu in the player bar use the new
   white icon spec, which vanishes on the blush bar. */
ytmusic-player-bar ytmusic-like-button-renderer button,
ytmusic-player-bar ytmusic-like-button-renderer .ytSpecButtonShapeNextIcon,
ytmusic-player-bar ytmusic-like-button-renderer span,
ytmusic-player-bar ytmusic-like-button-renderer svg,
ytmusic-player-bar ytmusic-like-button-renderer path,
ytmusic-player-bar ytmusic-menu-renderer button,
ytmusic-player-bar ytmusic-menu-renderer yt-icon,
ytmusic-player-bar ytmusic-menu-renderer svg,
ytmusic-player-bar ytmusic-menu-renderer path {
  color: #7d5668 !important;
  fill: #7d5668 !important;
}
ytmusic-player-bar ytmusic-like-button-renderer:hover button,
ytmusic-player-bar ytmusic-like-button-renderer:hover svg,
ytmusic-player-bar ytmusic-like-button-renderer:hover path,
ytmusic-player-bar ytmusic-menu-renderer:hover yt-icon,
ytmusic-player-bar ytmusic-menu-renderer:hover svg,
ytmusic-player-bar ytmusic-menu-renderer:hover path {
  color: #c94b7b !important;
  fill: #c94b7b !important;
}
ytmusic-player-bar ytmusic-like-button-renderer[like-status="LIKE"] button,
ytmusic-player-bar ytmusic-like-button-renderer[like-status="LIKE"] svg,
ytmusic-player-bar ytmusic-like-button-renderer[like-status="LIKE"] path {
  color: #ff5f97 !important;
  fill: #ff5f97 !important;
}

/* Scrollbars, selection, focus */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: #f3a9c2;
  border: 2px solid #fff7fa;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover { background: #ed8fb0; }
::selection { background: #ffc2d8; color: #472637; }

/* Keep links legible: pink titles, soft plum metadata. */
a, yt-formatted-string a { color: inherit !important; }
yt-formatted-string.title,
yt-formatted-string.title a,
ytmusic-player-bar .title,
ytmusic-player-bar .title a {
  color: #b23a6a !important;
}
yt-formatted-string.subtitle,
yt-formatted-string.subtitle a,
yt-formatted-string.byline,
yt-formatted-string.byline a {
  color: #7d5668 !important;
}

/* Nav controls: the guide icon arrives near-white and the sign-in link is a
   plain gray pill, both of which disappear on blush. */
ytmusic-nav-bar yt-icon-button#guide-button,
ytmusic-nav-bar yt-icon-button#guide-button *,
ytmusic-nav-bar yt-icon-button#guide-button svg,
ytmusic-nav-bar yt-icon-button#guide-button svg path {
  color: #c94b7b !important;
  fill: #c94b7b !important;
}
ytmusic-nav-bar yt-icon-button#guide-button:hover,
ytmusic-nav-bar yt-icon-button#guide-button:hover *,
ytmusic-nav-bar yt-icon-button#guide-button:hover svg path {
  color: #a83362 !important;
  fill: #a83362 !important;
}

ytmusic-nav-bar a.sign-in-link,
ytmusic-nav-bar a.sign-in-link.app-bar-button,
ytmusic-nav-bar ytmusic-button-renderer#sign-in-button {
  background: #ff6fa5 !important;
  color: #ffffff !important;
  border: 1px solid #f05f96 !important;
  border-radius: 999px !important;
  padding: 0 14px !important;
  height: 30px !important;
  box-shadow: 0 2px 8px rgba(201, 75, 123, 0.22) !important;
}
ytmusic-nav-bar a.sign-in-link *,
ytmusic-nav-bar a.sign-in-link.app-bar-button *,
ytmusic-nav-bar ytmusic-button-renderer#sign-in-button * {
  color: #ffffff !important;
  fill: #ffffff !important;
}
ytmusic-nav-bar a.sign-in-link:hover,
ytmusic-nav-bar a.sign-in-link.app-bar-button:hover {
  background: #f05f96 !important;
}
`;

  function applyTheme() {
    var root = document.documentElement;
    if (!root) { return false; }

    var style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = css;
      (document.head || root).appendChild(style);
    } else if (style.textContent !== css) {
      style.textContent = css;
    }

    root.style.setProperty('color-scheme', 'light');
    if (root.getAttribute('ania-theme') !== 'pink') {
      root.setAttribute('ania-theme', 'pink');
    }
    return true;
  }

  if (!applyTheme()) {
    var observer = new MutationObserver(function () {
      if (applyTheme()) { observer.disconnect(); }
    });
    observer.observe(document, { childList: true, subtree: true });
  }

  // YouTube Music is a single-page app; re-assert the theme after navigations
  // and if a late style recalculation ever removes the injected sheet.
  document.addEventListener('yt-navigate-finish', applyTheme, true);
  window.addEventListener('load', applyTheme, true);
  setInterval(function () {
    if (!document.getElementById(STYLE_ID)) { applyTheme(); }
  }, 2000);
})();

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: optional;
  src: url('/fonts/inter-v3-latin-500.woff2') format('woff2')
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: optional;
  src: url('/fonts/inter-v3-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url('/fonts/inter-v3-latin-700.woff2') format('woff2')
}

@font-face {
  font-family: 'Spectral';
  font-style: normal;
  font-weight: 700;
  font-display: optional;
  src: url('/fonts/spectral-v7-latin-700.woff2') format('woff2')
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  font-size: ${(props) => props.theme.font.sizes.medium}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

html,
input,
button,
select,
option {
  font-family: ${(props) => props.theme.font.family};
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;

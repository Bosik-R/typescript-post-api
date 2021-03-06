import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body,
textarea {
	margin: 0;
	font-family: 'Encode Sans Expanded', sans-serif;
	color: #000000;
}

* {
	box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Roboto', sans-serif;
}

a {
	text-decoration: none;
	color: #000000;
}

button {
	border: none;
	cursor: pointer;
	color: #000000;
}
`;

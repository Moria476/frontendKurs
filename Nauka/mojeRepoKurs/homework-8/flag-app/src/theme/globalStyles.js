import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Nunito+Sans:wght@300;400;800&display=swap");

:root {
 
 --color-white:hsl(0, 0%, 100%); //White (Dark Mode Text & Light Mode Elements)
--color-very-dark-blue1:hsl(200, 15%, 8%);//Very Dark Blue (Light Mode Text)
--color-dark-grey:hsl(0, 0%, 52%);//Dark Gray (Light Mode Input)
--color-very-light-grey:hsl(0, 0%, 98%);//Very Light Gray (Light Mode Background)
--color-dark-blue:hsl(209, 23%, 22%);//Dark Blue (Dark Mode Elements)
 --color-very-dark-blue2:hsl(207, 26%, 17%);//Very Dark Blue (Dark Mode Background)
 --font-size-h1: 1.5rem;
  --font-size-h3: 2rem;
  --font-size-body: 1.6rem;
  --line-height-body: 1.4rem;
  --border-radius-xxs: 0.3rem;
  --border-radius-xs: 0.5rem;
  --border-radius-s: 0.6rem;
  --border-radius-m: 1.2rem;
  --border-radius-l: 1.5rem;
  --border-radius-xl: 10rem;
  --padding-layout: 0 10%;
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px ;
  scroll-behavior: smooth;
}

body {

  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  line-height: var(--line-height-body);
  color: var(--color-very-dark-blue1);
}

:root {

  min-height: 100vh;
  background-color: var(--color-very-light-grey);
  
}
:root {

  --background-color-app: var(--color-very-light-grey);
  --background-color-elements: var(--color-white);
  --color-text: var(--color-very-dark-blue1);
}
:root .dark-theme {

  --background-color-app: var(--color-very-dark-blue2);
  --background-color-elements: var(--color-dark-blue);
  --color-text: var(--color-white);
}

.top__wrapper{
  margin:15px 0;
  display: flex;
   justify-content: space-between;
  align-items: center;
  height: 6rem;
  gap:5px;
}

 @media (max-width: 450px) {
		.top__wrapper{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items:center;
      justify-content:center;
    }
	} 
main {
  position: relative;
  display: flex;
  flex-direction: column;
  
  padding:var(--padding-layout);
}


h1,
h2,
h3 {
  transition: 0.2s linear;
}

 h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
}



h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
}
button,
input {
  border: none;
  outline: none;
  font-family: inherit;
  background-color: transparent;
}
input[type="checkbox"]{
  appearance:none
}
button {
  cursor: pointer;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.showOnlyOnMobile {
  display: none;
}

.mode{
  text-transform: uppercase;
  font-weight: 700;

}

.hidden {
		display: none;
	}


`;

export default GlobalStyle;

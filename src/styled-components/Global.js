import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Karla:400,700')
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  /* -webkit-tap-highlight-color: transparent; */
}
body {
  font-family: Karla, sans-serif;
  line-height: 1.28;
  background-color: #f5f5f5;
  color: #101010;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

`

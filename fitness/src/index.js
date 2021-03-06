import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
// import lightBlue from '@material-ui/core/colors/purple'
// import indigo from '@material-ui/core/colors/indigo'

import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
 palette: {
  primary: {
    light: '#C5CAE9',
    main: '#212121',
    dark: '#C5CAE9',
    contrastText: '#fff',
  },
  secondary: {
    light: '#2196F3',
    main: '#C5CAE9',
    dark: '#ba000d',
    contrastText: '#000',
  },
},
})

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

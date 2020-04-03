import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar/>
        <Content/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          crossOrigin="anonymous"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

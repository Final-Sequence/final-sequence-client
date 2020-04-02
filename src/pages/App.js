import React, { useEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ErrorBoundary from "../components/organisms/error/ErrorBoundary";
import "semantic-ui-css/semantic.min.css"
import ReactGA from "react-ga";
import Home from "./home/Home";

if (process.env.REACT_APP_FINAL_SEQUENCE_ENV === "production") {
  ReactGA.initialize("UA-158112268-1");
  const path = window.location.pathname + window.location.search;
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}
const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #fceadc;
      font-size: 20px;
    }
    ::-webkit-scrollbar {
       width: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 50, .5);
      border-radius: 10px;
      box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
    }
    .disable-scroll::-webkit-scrollbar{
      display:none;
    }
    select {
      width: 100%;
    }
`;

const LocationListener = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.REACT_APP_FINAL_SEQUENCE_ENV === "production") {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }
  }, [location]);

  return children;
};

const App = () => {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <GlobalStyles />
        <BrowserRouter>
          <LocationListener>
            <Route exact path="/" component={Home} />
          </LocationListener>
        </BrowserRouter>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default App;

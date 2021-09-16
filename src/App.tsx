import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Footer from "./components/common/footer";
import Header from "./components/common/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header firstname="Jan" surname="Gradič" />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
};

export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { LoginContext } from "./Contexts/LoginContext";

const App: React.FC = () => {
  const [jwt, setJwt] = useState("");

  return (
    <LoginContext.Provider value={{ jwt, setJwt }}>
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
    </LoginContext.Provider>
  );
};

export default App;

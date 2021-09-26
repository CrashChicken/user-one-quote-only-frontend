import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AuthContextProvider from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
};

export default App;

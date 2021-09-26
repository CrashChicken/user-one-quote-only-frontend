<<<<<<< Updated upstream
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AuthContextProvider from "./contexts/AuthContext";
=======
<<<<<<< Updated upstream
import React from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <AuthContextProvider>
      <Router>
        <Header firstname="Jan" surname="Gradič" />
        <Switch>
=======
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
=======
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AuthContextProvider from "./contexts/AuthContext";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  );
};

export default App;

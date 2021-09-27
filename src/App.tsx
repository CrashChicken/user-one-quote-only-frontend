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
import NotFound from "./pages/notFound";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
};

export default App;

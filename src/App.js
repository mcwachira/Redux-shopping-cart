
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return (
    <div className="App">
      {/* we show different pages based on wheather the user is logged in or not */}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("isDark")
      ? window.localStorage.getItem("isDark")
      : "bright"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
      }
    } else if (localStorage.getItem("theme") === "bright") {
      if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
      }
    }
  });

  return (
    <Router>
      <div className="app">
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

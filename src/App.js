import "./App.css";
import Layout from "./components/layout.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.ContentMain>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </Layout.ContentMain>
      </Layout>
    </div>
  );
}

export default App;

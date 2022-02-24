import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';

import NewProject from './components/pages/NewProject/NewProject';
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";



function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

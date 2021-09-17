/** @format */
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles.css";
import "./assets/responsive.css";
import Navbar from "./components/navbar";
import HeaderFirst from "./components/headerFirst";
import Bed from "./components/bed/bed";
import Footer from "./components/footer/footer";
import About from "./views/aboutUs/about";
import ContactUs from "./views/contact/contact";
import Almira from "./components/almira/almira";
import ArtWork from "./components/artwork/artwork";

function App() {
  return (
    <div className=''>
      <Router>
        <HeaderFirst />
        <Navbar />
        <Switch>
          <Route path='/bed' component={Bed} exact />
          <Route path='/almira' component={Almira} exact />
          <Route path='/artwork' component={ArtWork} exact />
          <Route path='/about' component={About} exact />
          <Route path='/contact' component={ContactUs} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

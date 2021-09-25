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
import Home from "./views/home/home";
import Dining from "./components/diningTables/diningTables";
import Sculpture from "./components/Sculpture/sculpture";
import Door from "./components/door/door";
import Chair from "./components/chair/chair";
import Tables from "./components/Tables/tables";

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/bed' component={Bed} exact />
          <Route path='/almira' component={Almira} exact />
          <Route path='/artwork' component={ArtWork} exact />
          <Route path='/dining' component={Dining} exact />
          <Route path='/sculpture' component={Sculpture} exact />
          <Route path='/door' component={Door} exact />
          <Route path='/chair' component={Chair} exact />
          <Route path='/tables' component={Tables} exact />
          <Route path='/about' component={About} exact />
          <Route path='/contact' component={ContactUs} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";
import Contact from "./pages/ContactPage";
import Menus from "./pages/MenuPage";
import SingleMenu from "./pages/SingleMenuPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Sidebar />

      <SideCart />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/menus" exact component={Menus} />
        <Route path="/menus/:id" exact component={SingleMenu} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

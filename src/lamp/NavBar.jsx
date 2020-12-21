import './navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
    return (
      <Router>
      <div className="navBar">
            <Link to='/'>Starter Store</Link>
        <div className="right">
            <Link to='/signUp'>Sign up</Link>
            <Link to='/signIn'>Sign in</Link>
            <Link to='/cart'>Cart</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/signUp">
        </Route>
        <Route path="/signIn">
        </Route>
        <Route path="/cart">
        </Route>
      </Switch>
      </Router>
    );
  }
  
  export default NavBar;
  
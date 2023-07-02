import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-section">
         
               <NavLink exact to="/" activeClassName="active" inactiveClassName="inactive">Home</NavLink>
            
               <NavLink to="/psychiatrists" activeClassName="active" inactiveClassName="inactive">Psychiatrists</NavLink>
            
               <NavLink to="/therapists" activeClassName="active" inactiveClassName="inactive">Therapists</NavLink>
            
               <NavLink to="/aboutus" activeClassName="active" inactiveClassName="inactive">AboutUs</NavLink>
            
          </div>
          <div className="right-section">
            <a href="/">Signup</a>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;

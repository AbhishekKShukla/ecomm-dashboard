import { Navbar, Nav,NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const Header = () => {
   const userDetail=JSON.parse( localStorage.getItem('user-info'));
 const history=useNavigate();
  function logout()
  {
    localStorage.clear();
    history('/');
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Comm Dashboard</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">Add Product</Link>
              <Link to="/update/:Id">Update Product</Link>
              <Link to="/ProductList">Product List</Link>
            </>
          ) : (
            <>
              <Link to="/">Sign-Up</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Nav>
        {
          localStorage.getItem('user-info') ?
          
            <Nav>
            <NavDropdown title={userDetail.userName}>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          :null
          
}
        
        
      </Navbar>
    </div>
  );
};
export default Header;

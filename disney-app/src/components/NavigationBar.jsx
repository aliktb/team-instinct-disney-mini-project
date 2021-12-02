import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Team Instinct</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />

        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/character">Characters</NavLink>
          </NavItem>
        </Nav>
        {/* add sean's search thing here */}
      </Navbar>
    </div>
  );
};

export default NavigationBar;

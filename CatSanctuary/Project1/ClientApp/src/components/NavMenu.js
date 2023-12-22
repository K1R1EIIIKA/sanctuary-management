import React, {Component} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-4" container
                light>
          <NavbarBrand tag={Link} className={'link text-montserrat'} to="/"><h4 className={'mb-1 mt-1'}>Лапки в Ладошке</h4></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark text-gilroy-extrabold" to="/animals"><h5 className={'mb-0'}>Все животные</h5></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark text-gilroy-extrabold" to="/sanctuaries"><h5 className={'mb-0'}>Все приюты</h5></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark text-gilroy-extrabold" to="/about"><h5 className={'mb-0'}>О нас</h5></NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

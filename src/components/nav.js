import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, NavbarBrand } from 'react-bootstrap'


class Nav extends React.Component {

render() {
  return (
    <Navbar bg="dark">
      <NavbarBrand><span className="h1 text-white">Skateparks of WA</span></NavbarBrand>
    </Navbar>
  )
};
}

export default Nav;
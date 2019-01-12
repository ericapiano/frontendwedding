import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>About</DropdownToggle>
        <DropdownMenu>
          <Link to="/about-couple">
            <DropdownItem>{this.props.item1}</DropdownItem>
          </Link>
          <Link to="/about-party">
            <DropdownItem>Bridal party</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

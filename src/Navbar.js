import React from "react";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <div>
        <Menu pointing>
          <Link to="/">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick} 
              />
          </Link>
          <Link to="/about">
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            </Link>
          <Link to="/friends">
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
              />
          </Link>
        </Menu>
      </div>
    );
  };
};

export default Navbar;
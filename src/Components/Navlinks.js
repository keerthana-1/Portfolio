import React, { useState } from 'react';
import { Menu, MenuItem, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Navlinks = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  const handleItemClick = (name) => {
    setActiveItem(name);
    if (name === 'home') {
      navigate('/');
    } else if (name === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Menu secondary className="pr-20 float-right">
      <MenuItem
        name="home"
        active={activeItem === 'home'}
        onClick={() => handleItemClick('home')}
        className="text-md"
        style={{ color: "#78350F" }}
      >
        <Icon name="home" size="large" />
      </MenuItem>

      <MenuItem
        name="contact"
        active={activeItem === 'contact'}
        onClick={() => handleItemClick('contact')}
        className="text-md"
        style={{ color: "#78350F" }}
      >
        <Icon name="phone" size="large" />
      </MenuItem>
    </Menu>
  );
};

export default Navlinks;

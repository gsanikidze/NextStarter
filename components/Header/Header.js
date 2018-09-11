import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ toggleHeader }) => (
  <div id="header" className={toggleHeader ? 'toggled' : null}>
    <div>
      Next Starter With Redux and Sass
    </div>
  </div>
);

Header.propTypes = {
  toggleHeader: PropTypes.bool.isRequired,
};

export default Header;

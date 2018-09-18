// @flow
import React from 'react';

import './header.scss';

type Props = {
  toggleHeader: boolean
}

const Header = ({ toggleHeader }: Props) => (
  <div id="header" className={toggleHeader ? 'toggled' : null}>
    <div>
      Next Starter With Redux and Sass
    </div>
  </div>
);

export default Header;

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// redux
import { actionCreators } from 'ACTIONS';

// components
import Header from 'COMPONENTS/Header';
import Counter from 'COMPONENTS/Counter';
import Button from 'COMPONENTS/Button';

// styles
import 'STYLES/main.scss';
import 'STYLES/reset.scss';
import './home_page.scss';

// other
import { Link } from 'ROUTES';

const HomePage = ({ toggleHeader, actions }) => (
  <div id="home_page">
    <Header toggleHeader={toggleHeader} />
    <h3>Sample Redux Component</h3>
    <Counter />
    <button className="toggler" onClick={actions.toggleHeader}>Toggle Header</button>
    <Link route="AboutRoute" params={{ param: 'This Is Passed By Query!' }}><a>Router Sample</a></Link>
    <br />
    <Button>Check This Component To See Component With Flow</Button>
  </div>
);

// props
HomePage.propTypes = {
  toggleHeader: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

// connected component with redux
function mapStateToProps(state) {
  return { toggleHeader: state.headerReducer.toggleHeader };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

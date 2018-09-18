// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// redux
import { actionCreators } from 'ACTIONS';

// styles
import './counter.scss';

// props
type Props = {
  count: number,
  actions: Object
}

// component
const Counter = ({ count, actions }: Props) => (
  <div id="counter">
    <div className="counter_result">
      <div>Result: </div>
      <div>{count}</div>
    </div>
    <div className="counter_controller">
      <button onClick={actions.decrementCount}>-</button>
      <span className="devider" />
      <button onClick={actions.incrementCount}>+</button>
    </div>
  </div>
);

// connected component with redux
function mapStateToProps(state) {
  return { count: state.counterReducer.count };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

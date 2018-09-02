import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// redux
import { actionCreators } from 'ACTIONS'

// styles
import './counter.scss'

// component
const Counter = ({ count, actions }) => {
    return (
        <div id="counter">
            <div className="counter_result">
                <div>Result: </div>
                <div>{count}</div>
            </div>
            <div className="counter_controller">
                <div onClick={actions.decrementCount}>-</div>
                <span className="devider"></span>
                <div onClick={actions.incrementCount}>+</div>
            </div>
        </div>
    )
}


// connected component with redux
function mapStateToProps(state) {
    return { count: state.counterReducer.count }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

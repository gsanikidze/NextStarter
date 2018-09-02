import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// redux
import * as actions from 'ACTIONS'

//components
import Header from 'COMPONENTS/Header'
import Counter from 'COMPONENTS/Counter'

// styles
import 'STYLES/main.scss'
import 'STYLES/reset.scss'
import './home_page.scss'

const HomePage = ({ toggleHeader, actions }) => {
    return (
        <div id="home_page">
            <Header toggleHeader={toggleHeader} />
            <h3>Sample Redux Component</h3>
            <Counter />
            <button className="toggler" onClick={actions.toggleHeader}>Toggle Header</button>
        </div>
    )
}

// connected component with redux
function mapStateToProps(state) {
    return { toggleHeader: state.headerReducer.toggleHeader }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

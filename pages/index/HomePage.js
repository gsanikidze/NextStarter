import React from 'react'

//components
import Header from 'COMPONENTS/Header'
import Counter from 'COMPONENTS/Counter'

// styles
import 'STYLES/main.scss'
import 'STYLES/reset.scss'
import './home_page.scss'

const HomePage = () => {
    return (
        <div id="home_page">
            <Header />
            <h3>Sample Redux Component</h3>
            <Counter />
        </div>
    )
}

export default HomePage

import React from 'react'

//components
import Header from 'COMPONENTS/Header'

// styles
import 'STYLES/main.scss'
import 'STYLES/reset.scss'

export default () => {
    return (
        <div>
            <Header />
            <div className="main_paragraph">
                Home
            </div>
        </div>
    )
}

import React from 'react'

import './header.scss'

export default ({ toggleHeader }) => {
    return (
        <div id="header" className={toggleHeader ? 'toggled' : null}>
            <div>
                Next Starter With Redux and Sass
            </div>
        </div>
    )
}

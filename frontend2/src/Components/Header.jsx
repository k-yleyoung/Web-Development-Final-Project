import React from 'react'
import PropTypes from 'prop-types'

export default function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Journal'
}

Header.propTypes = {
    //ensures proptype will be correct type that you are expecting
    title: PropTypes.string,
}

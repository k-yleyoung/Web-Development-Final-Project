import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


export default function Header({title}) {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <h1>{title}</h1>
            <button onClick={() => navigate("/")}>dashboard</button>
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

import React from 'react'
import IntrigoLogo from '../images/intrigo-logo.png'

export default function Title() {
    return(
        <header className='title'>
            <img src={IntrigoLogo} />
            <h1>Intrigo</h1>
        </header>
    )
}
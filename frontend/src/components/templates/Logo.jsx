import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/imgs/logo.svg'

export default props=>
    <Link to="/" className="logo">
        <span className="logo-mini"><img src={logo} alt="logo"/></span>
        <span className="logo-lg">{props.nameProgram}</span>
    </Link>
import React from 'react'
import {Link} from 'react-router-dom'

import './navTop.css'

export default props=>
    <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" onClick={props.onClick}></a >{/* Quando redusido a classe terá que ser sidebar-open */}
        {/* Link sem histore  */}
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li>
                    <Link to='/'>
                        <i className="fa fa-user"></i>
                        <span className="hidden-xs"> Luiz Claudio</span>
                    </Link>
                </li>                
                <li>
                    <Link to='/'>
                        <i className="fa fa-envelope-o"></i>
                        <span className="label label-success">4</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fa fa-gears"></i>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
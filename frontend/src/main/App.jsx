import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/AdminLTE.min.css'
import '../assets/css/skins/skin-green.min.css'

import MainHeader from '../components/templates/MainHeader'
import Footer from '../components/templates/Footer'

import React from 'react'
import { HashRouter } from 'react-router-dom'

import Router from './Router';

export default props =>
    <HashRouter>
        <div className="wrapper">
            <MainHeader />
            <Router />
            <Footer />
        </div>
    </HashRouter>


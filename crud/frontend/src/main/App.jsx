import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from "./Routes";
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            {/* Se coloca o Routes no lugar do Main */}
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

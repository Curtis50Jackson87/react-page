import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'



ReactDOM.render(
    <router>
        <div>
           <route path="/" component={App} />
           <route exact path="/" component={About} />
           <route path="/Projects" component={Projects} />
           <route path="/Contact" component={Contact} />
        </div>
    </router>

    ,

    document.getElementById('root'));

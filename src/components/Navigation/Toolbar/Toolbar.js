import React from 'react';
import clases from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;
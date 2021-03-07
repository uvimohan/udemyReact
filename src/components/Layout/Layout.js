import React from 'react';
import Aux from '../../hoc/Aux';
import layoutCss from './Layout.css';

const layout = (props) => (    
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;
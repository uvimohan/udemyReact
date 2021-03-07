import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
            onClick={props.remove} 
            className="Less"
            disabled={props.disabled} >Less</button>
        <button
            onClick={props.add}
            className="More" >More</button>
    </div>
);

export default buildControl;
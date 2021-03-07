import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad"},
    { label: "Bacon", type: "bacon"},
    { label: "Cheese", type: "cheese"},
    { label: "Meat", type: "meat"}
];

const buildControls = (props) => (
    <div className="BuildControls">
        { 
            controls.map(ctrl => (
                <BuildControl
                    add={() => props.addIngredient(ctrl.type) }
                    remove={() => props.removeIngredient(ctrl.type) }
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    disabled={props.disabled[ctrl.type]}
                />)
            )
        }
    </div>
);

export default buildControls;
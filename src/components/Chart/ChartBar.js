import React from "react";

import "./ChartBar.css";


const ChartBar = (props) => {
    let barBarometer = '0%';

    // computing dynamic css values
    if (props.maxValue > 0) {
        barBarometer = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (<div className="chart-bar">
                <div className="chart-bar__inner">

                    <div className="chart-bar__fill" style={{height: barBarometer}}></div>
                    </div>

                    <div className="chart-bar__label">{props.metric}</div>

            </div>


    )
} 

export default ChartBar;
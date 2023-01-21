import React from "react";

import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = (props) => {
    // takes props and maps it into jsx component
    return <div className="Chart">
    {props.spendingData.map(finData => <ChartBar 
    value={finData.value}
    maxValue={null} 
    metric={finData.metric}
    id={finData.metric} />)}
    </div>
};

export default Chart;
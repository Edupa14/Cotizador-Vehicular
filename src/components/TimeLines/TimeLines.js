import React from "react";
import './TimeLines.css';
const TimeLines = () => {
    return (
        <>
            <ol className="timeline">
                <li> Datos </li>
                <li className="timeline--select"> Arma tu plan </li>
            </ol>
           {/* <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                    Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>*/}
        </>
    )
}

export default TimeLines;
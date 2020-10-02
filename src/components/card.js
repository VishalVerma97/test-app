import React from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div>
                <img src={props.satelliteInfo.links.mission_patch_small}/>
            </div>
            <div className="mission base-font bold-weight">
                {props.satelliteInfo.mission_name} # {props.satelliteInfo.flight_number}
            </div>
            <div>
                <div className="base-font bold-weight">Mission Ids: </div>
                {
                    props.satelliteInfo.mission_id && props.satelliteInfo.mission_id.length > 0 ? missionId(props.satelliteInfo) : unAvailable()
                }
            </div>
            <div>
                <span className="base-font bold-weight">
                    Launch Year:
                </span>
                <span className="pl-2">
                    { !!props.satelliteInfo.launch_year ? props.satelliteInfo.launch_year: '-'}
                </span>
            </div>
            <div>
                <span className="base-font bold-weight">
                    Successful Launch:
                </span>
                <span className="pl-2">
                    { props.satelliteInfo.launch_success ? 'True': 'False' }
                </span>
            </div>
            <div>
                <span className="base-font bold-weight">
                    Successful Landing:
                </span>
                <span className="pl-2">
                    { !!props.satelliteInfo.launch_landing ? props.satelliteInfo.launch_landing: '-'}
                </span>
            </div>
        </div>
    );
}

function missionId(info) {
    return (
        <ul>
            {
                info.mission_id.map((item) => {
                    return (
                        <li>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )
}

function unAvailable() {
    return (
        <div className="unavailable">
            Unavailable
        </div>
    )
}

export default Card
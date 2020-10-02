import React from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div>
                <img src={props.satelliteInfo.links.mission_patch_small}/>
            </div>
            <div>
                {props.satelliteInfo.mission_name} # {props.satelliteInfo.flight_number}
            </div>
            <div>
                <div>Mission Ids: </div>
                {
                    props.satelliteInfo.mission_id && props.satelliteInfo.mission_id.length > 0 ? missionId(props.satelliteInfo) : 'Unavailable'
                }
            </div>
            <div>
                <span>
                    Launch Year:
                </span>
                <span>
                    { !!props.satelliteInfo.launch_year ? props.satelliteInfo.launch_year: '-'}
                </span>
            </div>
            <div>
                <span>
                    Successful Launch:
                </span>
                <span>
                    { props.satelliteInfo.launch_success ? 'True': 'False' }
                </span>
            </div>
            <div>
                <span>
                    Successful Landing:
                </span>
                <span>
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

export default Card
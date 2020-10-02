import React from 'react';
import Card from '../components/card';
import { launchService } from '../services/launchService';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            launchedSatellites: []
        };
    }

    componentDidMount() {
        var that = this;
        (
            async function() {
                await launchService().then((result) => {
                    console.log(result);
                    that.setState({
                        launchedSatellites: result
                    });
                });
            }
        )();
    }

    render() {
        return (
            <div className="app p-4">
                <h3>SpaceX Launch Programs</h3>

                <div className="mainDiv row d-flex">
                    <div className="col-lg-2">
                        Hello
                    </div>
                    <div className="row col-lg-10">
                    {
                        this.state.launchedSatellites.map((item) => {
                            return (
                                <div className="d-flex col-lg-3 mb-3">
                                    <Card satelliteInfo={item}></Card>
                                </div>
                            )
                        })
                    }
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;
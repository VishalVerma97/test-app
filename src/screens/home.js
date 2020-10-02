import React from 'react';
import Card from '../components/card';
import FilterCard from '../components/filterCard';
import { launchService } from '../services/launchService';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            launchedSatellites: [],
            launch_year: null,
            launch_success: null,
            land_success: null,
        };
        this.filterEvent = this.filterEvent.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        var that = this;
        const queryParams = {}
        if (this.state.launch_year) {
            queryParams.launch_year = this.state.launch_year;
        }
        if (this.state.launch_success) {
            queryParams.launch_success = this.state.launch_success;
        }
        if (this.state.land_success) {
            queryParams.land_success = this.state.land_success;
        }
        await launchService(queryParams).then((result) => {
            that.setState({
                launchedSatellites: result
            });
        });
    }

    filterEvent = (obj) => {
        switch(obj.eventType) {
            case 'year':
                this.setState({
                    launch_year: obj.value
                }, () => {this.loadData()});
            break;
            case 'launch': 
                this.setState({
                    launch_success: obj.value
                }, () => {this.loadData()});
            break;
            case 'landing': 
                this.setState({
                    land_success: obj.value
                }, () => {this.loadData()});
            break;
        }
    }

    render() {
        return (
            <div className="app p-4">
                <h3>SpaceX Launch Programs</h3>

                <div className="mainDiv row d-flex">
                    <div className="col-lg-2">
                        <FilterCard eventHandler={this.filterEvent}/>
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
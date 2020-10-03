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
        if (this.state.launch_year != null) {
            queryParams.launch_year = this.state.launch_year;
        }
        if (this.state.launch_success != null) {
            queryParams.launch_success = this.state.launch_success;
        }
        if (this.state.land_success != null) {
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
                    launch_success: obj.value == 'True' ? true: false
                }, () => {this.loadData()});
            break;
            case 'landing': 
                this.setState({
                    land_success: obj.value == 'True' ? true: false
                }, () => {this.loadData()});
            break;
        }
    }

    clearFilterEvent = () => {
        this.setState({
            launch_year: null,
            launch_success: null,
            land_success: null
        }, () => {this.loadData()});
    }

    render() {
        return (
            <div className="app p-4">
                <h3>SpaceX Launch Programs</h3>

                <div className="mainDiv row d-flex">
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-xs-12 filterMargin">
                        <FilterCard eventHandler={this.filterEvent} clearFilter={this.clearFilterEvent}/>
                    </div>
                    {
                        (
                            this.state.launchedSatellites.length > 0
                        ) ? 
                        (
                            <div className="rowCard col-xl-10 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            {
                                this.state.launchedSatellites.map((item) => {
                                    return (
                                        <div className="d-flex col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3 cardPadding">
                                            <Card satelliteInfo={item}></Card>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        ) :
                        (
                            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex justify-content-center">
                                No Information Available
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Home;
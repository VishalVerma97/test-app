import React from 'react';

class FilterCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yearOptions: [],
            launchOptions: [],
            landingOptions: [],
        }
    }

    componentDidMount() {
        // Initialising config
        this.setYears();
        this.setLaunchOptions();
        this.setLandingOptions();
    }

    setYears() {
        this.setState({
            yearOptions: [
                2006,
                2007,
                2008,
                2009,
                2010,
                2011,
                2012,
                2013,
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020
            ]
        })
    }

    setLaunchOptions() {
        this.setState({
            launchOptions: [
                'True',
                'False'
            ]
        })
    }

    setLandingOptions() {
        this.setState({
            landingOptions: [
                'True',
                'False'
            ]
        })
    }

    render() {
        return (
            <div className="filterCard p-2">
                <div className="base-font">
                    Filters
                </div>
                <div className="text-center underline mb-2">
                    Launch Year
                </div>
                <div className="row col-lg-12 text-center mx-0">
                    {
                        this.state.yearOptions.map((item) => {
                            return (
                                <div className="col-lg-5 year m-1" onClick={() => this.props.eventHandler({eventType: 'year', value: item})}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center underline mb-2">
                    Successful Launch
                </div>
                <div className="row col-lg-12 text-center mx-0">
                    {
                        this.state.launchOptions.map((item) => {
                            return (
                                <div className="col-lg-5 year m-1" onClick={() => this.props.eventHandler({eventType: 'launch', value: item})}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center underline mb-2">
                    Successful Landing
                </div>
                <div className="row col-lg-12 text-center mx-0">
                    {
                        this.state.landingOptions.map((item) => {
                            return (
                                <div className="col-lg-5 year m-1" onClick={() => this.props.eventHandler({eventType: 'landing', value: item})}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FilterCard;
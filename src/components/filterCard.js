import React from 'react';

class FilterCard extends React.Component {

    selectedYear = null;
    selectedLaunch = null;
    selectedLand = null;

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
            <div className="filterCard p-3">
                <div className="d-flex justify-content-between base-font">
                    <div>
                        Filters
                    </div>
                    <div style={{cursor: 'pointer'}} onClick={() =>  {
                        this.selectedYear = null;
                        this.selectedLand = null;
                        this.selectedLaunch = null;
                        this.props.clearFilter();
                    }}>
                        Clear Filters
                    </div>
                </div>
                <div className="text-center underline mb-2">
                    Launch Year
                </div>
                <div className="row d-flex justify-content-between col-lg-12 text-center mx-0 cardPadding">
                    {
                        this.state.yearOptions.map((item) => {
                            return (
                                <div className={`col-5 year my-1 ${this.selectedYear == item ? 'selected' : ''}`} 
                                    onClick={() => {
                                        this.selectedYear = item;
                                        this.props.eventHandler({eventType: 'year', value: item})
                                    }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center underline mb-2">
                    Successful Launch
                </div>
                <div className="row d-flex justify-content-between col-lg-12 text-center mx-0 cardPadding">
                    {
                        this.state.launchOptions.map((item) => {
                            return (
                                <div className={`col-5 year my-1 ${this.selectedLaunch == item ? 'selected' : ''}`} 
                                    onClick={() => {
                                        this.selectedLaunch = item;
                                        this.props.eventHandler({eventType: 'launch', value: item})
                                    }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center underline mb-2">
                    Successful Landing
                </div>
                <div className="row d-flex justify-content-between col-lg-12 text-center mx-0 cardPadding">
                    {
                        this.state.landingOptions.map((item) => {
                            return (
                                <div className={`col-5 year my-1 ${this.selectedLand == item ? 'selected' : ''}`}
                                onClick={() => { 
                                    this.selectedLand = item;
                                    this.props.eventHandler({eventType: 'landing', value: item})
                                }}>
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
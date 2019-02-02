import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from 'react';

const MapBox = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ290aGFtZXkiLCJhIjoiY2pxejRzMjVhMDlyZjQ1bGh4ZHdzaXkzMyJ9.3nRJUHgfnPtcOJvi9q06hw"
});

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lng: props.lon,
                lat: props.lat
            },
            fetchedData: null
        }
    }

    handleMove(event) {
        this.setState({ center: event.transform.center })
        // console.log(event.transform.center);
        this.props.setLon(event.transform.center.lng);
        this.props.setLat(event.transform.center.lat);
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = `http://54.183.197.3/predictprice?lat=${this.state.center.lat}&lng=${this.state.center.lng}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ fetchedData: data });
            })
            .then(() => this.renderInfo())
            .catch(error => {
                console.log(error);
            })
    }

    renderInfo() {
        if (this.state.fetchedData) {
            document.getElementById("infoContent").innerHTML = `Estimated m² Price: SAR ${this.state.fetchedData.meter_price}`;
        }
        else {
            document.getElementById("infoContent").innerHTML = `No Estimation for specified point.`
        }
    }

    renderMap() {
        return (
            <MapBox
                // style="mapbox://styles/mapbox/satellite-v9"
                style="mapbox://styles/mapbox/basic-v9"
                // style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "50vh",
                    width: "50vw",
                    marginLeft: "25%"
                }}
                center={[this.state.center.lng, this.state.center.lat]}
                onMove={(event) => this.handleMove(event)}
            >
                <Layer
                    type="symbol"
                    // id="marker"
                    layout={{ "icon-image": "circle-15" }}
                >
                    <Feature coordinates={[this.state.center.lng, this.state.center.lat]} />
                </Layer>
            </MapBox>
        )
    }

    render() {
        return (
            <div className="mapWrapper">
                {this.renderMap()}
                <div className="pointActions">
                    <label> Longitude: <input type="text" disabled value={this.state.center.lng} /></label> <br/> <br/>
                    <label> Latitude: <input type="text" disabled value={this.state.center.lat} /></label> <br/> <br/>
                    <button onClick={(event) => this.handleSubmit(event)}>Get Info</button>
                    <div id="info">
                        <p id="infoContent"></p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Map;
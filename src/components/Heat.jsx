import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const MapBox = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ290aGFtZXkiLCJhIjoiY2pxejRzMjVhMDlyZjQ1bGh4ZHdzaXkzMyJ9.3nRJUHgfnPtcOJvi9q06hw"
});

class Heat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lng: props.lon,
                lat: props.lat
            },
            // data: { "24.839651107788086,46.66218948364258": 1784.25, "24.658897,46.51532": 1332.21, "24.82285,46.63115": 1849.99, "24.781343,46.667702": 1727.66, "24.771638076570355,46.612877659499645": 1767.51, "24.624,46.56597": 1344.76, "24.843143,46.600098": 1737.63, "24.829256,46.574288": 1743.41, "24.902637,46.6163": 1569.58, "24.570911,46.624671": 1303.46, "24.821596,46.591694": 1833.43, "24.771733057350534,46.57586216926575": 1718.96, "24.909702,46.600342": 1594.77, "24.825724861302167,46.6366896405816": 1877.77, "24.78413,46.669979": 1730.31, "24.901615,46.606146": 1582.64, "24.767780303955078,46.619815826416016": 1740.85, "24.667913528421668,46.552583277225494": 1343.53, "24.823206,46.588645": 1813.54, "24.832726,46.606788": 1786.25, "24.742779,46.782223": 1710.53, "24.790413633279876,46.59482438117266": 1979.59, "24.883909,46.601349": 1604.4, "24.6436824798584,46.5001106262207": 1305.99, "24.766140940134882,46.65597707033157": 1707.08, "24.785615921020508,46.5958137512207": 1905.49, "24.626365,46.837287": 1448.26, "24.781494,46.588169": 1825.81, "24.635025,46.628914": 1528.32, "24.806428909301758,46.78171157836914": 1640.51, "24.797686,46.59346": 2093.72, "24.86971,46.611487": 1644.37, "24.77698824286022,46.75268545746803": 1745.79, "24.876708,46.606877": 1617.52, "24.837613,46.676286": 1746.91, "24.79026357402537,46.59211132675409": 1951.78, "24.839502,46.806324": 1560.39, "24.813141,46.628989": 1848.68, "24.773805,46.580672": 1744.67, "24.83868,46.56963": 1707.37, "24.6351,46.53141": 1305.45, "24.845116,46.669235": 1736.88, "24.896085,46.608718": 1568.26, "24.832378387451172,46.64256286621094": 1887.26, "24.87628,46.6184": 1608.17, "24.817821817122965,46.83385681360961": 1525.61, "24.856785,46.62881": 1710.25, "24.514587,46.672997": 1228.88, "24.858140291512193,46.803161948919296": 1560.5, "24.86582,46.8512": 1400.3, "24.825861,46.636436": 1875.5, "24.673862,46.852119": 1511.06, "24.635372,46.871624": 1442.54, "24.62405,46.72216": 1579.4, "24.75999,46.84182": 1621.0, "24.894718,46.60397": 1582.84, "24.446106,46.741949": 641.64, "24.848524,46.660453": 1741.05, "24.77386,46.6226": 1764.43, "24.864737,46.646812": 1695.25, "24.845237,46.678801": 1723.84, "24.819203,46.649433": 1967.83, "24.681807663740912,46.562448777258396": 1424.68, "24.59696,46.673584": 1416.88, "24.811588,46.659431": 1833.85, "24.825377,46.777695": 1636.43, "24.82137680053711,46.633121490478516": 1858.94, "24.8289037688982,46.584247425198555": 1771.74, "24.818473,46.590141": 1852.11, "24.783056,46.586387": 1830.08, "24.62892,46.52392": 1312.89, "24.760923,46.61371": 1714.38, "24.8583374215445,46.61259535700083": 1691.05, "24.812922291280298,46.658576130867004": 1846.13, "24.555188,46.531602": 1215.84, "24.747762,46.753348": 2075.45, "24.868821365992254,46.64577428251504": 1681.5, "24.81981,46.55273": 1695.77, "24.836485,46.665531": 1788.58, "24.87314,46.611171": 1628.81, "24.654047,46.532604": 1299.91, "24.63965,46.502914": 1307.46, "24.626551,46.527599": 1313.23, "24.56017303466797,46.59834289550781": 1287.97, "24.790046,46.584157": 1870.38, "24.813506,46.609365": 1909.0, "24.85358,46.828998": 1451.24, "24.765345,46.615845": 1733.01, "24.830661,46.636746": 1859.04, "24.851079,46.658421": 1734.86, "24.79327263831516,46.599752604961395": 2081.27, "24.829519,46.820313": 1530.9, "24.804309,46.592372": 2042.17, "24.810851,46.645792": 1858.95, "24.823505,46.594284": 1826.11, "24.891125,46.637447": 1602.39, "24.66149894572594,46.699857003986835": 1623.9, "24.79059991348122,46.59051675349474": 1939.97, "24.828373,46.633951": 1851.91, "24.79980825953671,46.59632842987776": 2217.79 },
            // data: { "24.839651107788086,46.66218948364258": 1784.25, "24.658897,46.51532": 1332.21 },
            data: {},
            dataArray: [],
            done: false,
            layerPaint: {
                'heatmap-weight': {
                    property: 'priceIndicator',
                    type: 'exponential',
                    stops: [[0, 0], [5, 2]]
                },
                // Increase the heatmap color weight weight by zoom level
                // heatmap-ntensity is a multiplier on top of heatmap-weight
                'heatmap-intensity': {
                    stops: [[0, 0], [5, 1.2]]
                },
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(33,102,172,0)',
                    0.25,
                    'rgb(103,169,207)',
                    0.5,
                    'rgb(209,229,240)',
                    0.8,
                    'rgb(253,219,199)',
                    1,
                    'rgb(239,138,98)',
                    2,
                    'rgb(178,24,43)'
                ],
                // Adjust the heatmap radius by zoom level
                'heatmap-radius': {
                    stops: [[0, 1], [5, 50]]
                }
            },
            distance: 2,
            numOfPoints: 50
        }
    }

    handleMove(event) {
        this.setState({ center: event.transform.center }, console.log("HEAT", event.transform.center))
        // console.log(event.transform.center);
        this.props.setLon(event.transform.center.lng);
        this.props.setLat(event.transform.center.lat);
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `http://54.183.197.3/heatmap?lat=${this.state.center.lat}&lng=${this.state.center.lng}&radius=${this.state.distance}&n=${this.state.numOfPoints}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data }, console.log("THE DATA :", data));
            })
            .then(() => {
                let sum = 0;
                let min = 0;
                let max = 0;
                Object.keys(this.state.data).forEach((current) => {
                    if (min === 0) {
                        min = this.state.data[current];
                    }
                    if (max === 0) {
                        max = this.state.data[current];
                    }
                    if (this.state.data[current] < min) {
                        min = this.state.data[current];
                    }
                    else if (this.state.data[current] > max) {
                        max = this.state.data[current];
                    }
                    sum += this.state.data[current];
                })
                let length = Object.keys(this.state.data).length;
                let avg = sum / length;
                console.log("SUM: ", sum);
                console.log("NUM OF POINTS: ", Object.keys(this.state.data).length);
                console.log("AVG: ", avg);
                console.log("MIN: ", min);
                console.log("MAX: ", max);
                const formatted = Object.keys(this.state.data).map(latlng => {
                    let tempArr = latlng.split(',');
                    // let tempObj = {
                    //     x: tempArr[1],
                    //     y: tempArr[0],
                    //     value: this.state.data[latlng]
                    // }
                    tempArr.push(((this.state.data[latlng] - min) / (max - min)) * 5);
                    console.log(((this.state.data[latlng] - min) / (max - min)) * 5)
                    // console.log(tempArr)
                    return tempArr
                })
                this.setState({ dataArray: formatted, done: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderMap() {
        return (
            <div>

                <MapBox
                    // style="mapbox://styles/mapbox/satellite-v9"
                    // style="mapbox://styles/mapbox/basic-v9"
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "50vh",
                        width: "50vw",
                        marginLeft: "25%"
                    }}
                    center={[this.state.center.lng, this.state.center.lat]}
                    onMove={(event) => this.handleMove(event)}
                >
                    <Layer type="heatmap" paint={this.state.layerPaint}>
                        {this.state.dataArray.map((el, index) => {
                            return (
                                <Feature key={index} coordinates={[el[1], el[0]]} properties={{ priceIndicator: el[2] }} />
                            )
                        })}
                    </Layer>
                </MapBox>
                <div className="heatActions">
                    <label> Distance around center in KM: <input type="number" min={1} max={10} value={this.state.distance} onChange={(event) => { this.setState({ distance: event.target.value }) }} /> </label> <br/> <br/>
                    <label> Number of points: <input type="number" min={1} max={100} value={this.state.numOfPoints} onChange={(event) => { this.setState({ numOfPoints: event.target.value }) }} /> </label> <br/> <br/>
                    <button onClick={(event) => this.handleSubmit(event)}>Generate points in this area.</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="heatMap">
                {
                    // this.state.done ? 
                    this.renderMap()
                    // : <p>Loading, please wait.</p>
                }
            </div>
        );
    }

}

export default Heat;
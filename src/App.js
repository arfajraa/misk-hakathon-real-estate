import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import Heat from './components/Heat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lon: 46.70469633381731,
      lat: 24.633948443770308,
      activeView: "point"
    }
  }

  setLon(lon) {
    this.setState({ lon })
  }
  setLat(lat) {
    this.setState({ lat })
  }


  setActiveView(view) {
    this.setState({ activeView: view })
  }

  renderContent() {
    if (this.state.activeView === "heat") {
      return (
        <div className="heat">
          <h1>Heat Map</h1>
          <Heat lon={this.state.lon} lat={this.state.lat}
                setLon={this.setLon.bind(this)} setLat={this.setLat.bind(this)} />
        </div>
      )
    }
    else if (this.state.activeView === "point") {
      return (
        <div className="point">
          <h1>Point Price</h1>
          <Map lon={this.state.lon} lat={this.state.lat}
               setLon={this.setLon.bind(this)} setLat={this.setLat.bind(this)} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <div className="navItem" onClick={() => this.setActiveView("point")}>Point Price</div>
          <div className="navItem" onClick={() => this.setActiveView("heat")}>Heatmap</div>
        </div>

        {this.renderContent()}

      </div>
    );
  }
}

export default App;

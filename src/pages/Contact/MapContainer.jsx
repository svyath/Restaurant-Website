import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import { GrBottomCorner } from 'react-icons/gr';
import {
  MapWrapper
} from './ContactElements.jsx';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
          <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 48.92032538353548, lng: 24.71026062359914}}
          onClick={this.onMapClicked}
          >
          <Marker 
            position={{ lat: 48.92032538353548, lng: 24.71026062359914}} 
            name={'Chef Restaurant'} 
            onClick={this.onMarkerClick} 
          />
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>
    );
  }
}

const mapStyles = {
  position: 'relative !important',
  width: '100%',
  height: '60%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3nohRj_-JJZ_yqumxhBsp1PPh7WcjPeQ' 
})(MapContainer)
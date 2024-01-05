import { Component, createRef } from 'react'
import PropTypes from 'prop-types';
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import "./Map.style.css"
import MapList from './MapList';
import MapListItem from './MapListItem';

export default class Map extends Component {
    bounds = new L.LatLngBounds();
    constructor(props) {
        super(props)
        this.mapRef = createRef()
        this.map = {}
    }
    componentDidMount() {
        const { center, zoom, markers } = this.props
        if (this.mapRef.current) {
            this.map = L.map(this.mapRef.current, {
                center: center,
                zoom: zoom
            });
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(this.map);

            if (markers.length > 0) {
                markers.forEach(marker => {
                    const { lat, lng, title, description } = marker
                    L.marker([lat, lng], { title: title }).addTo(this.map).bindPopup(description)
                    this.bounds.extend([lat, lng]);
                });
            }
            this.map.fitBounds(this.bounds);
        }
    }
    componentWillUnmount() {
        if (this.map) {
            this.map.remove();
            this.map = null;
        }
    }

    render() {
        return (
            <>
                <div ref={this.mapRef} className='map-container'>Map</div>
                <MapList>
                    {this.props.markers.map(el => <MapListItem key={el.title} />)}
                </MapList>
            </>
        )
    }
}

Map.defaltProps = {
    markers: [],
    zoom: 8
}
Map.propTypes = {
    center: PropTypes.array.isRequired,
    zoom: PropTypes.number,
    markers: PropTypes.array,
}
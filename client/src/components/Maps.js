// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; 
// import MapboxGeocoder from 'react-map-gl-geocoder'


// mapboxgl.accessToken = 'pk.eyJ1IjoiaGVjaGFjayIsImEiOiJjbDBqYW1wNTAwOGs3M2NxdDJ2dWV3dW54In0.uurI4F4nQDZoD8DlpstK6w';

// export default function Maps(){
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(13.41053);
//     const [lat, setLat] = useState(52.52437);
//     const [zoom, setZoom] = useState(9);

    
//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//           container: mapContainer.current,
//           style: 'mapbox://styles/mapbox/streets-v11',
//           center: [lng, lat],
//           zoom: zoom
//         });
//     });

//     useEffect(() => {
//         if (!map.current) return; // wait for map to initialize
//         map.current.on('move', () => {
//           setLng(map.current.getCenter().lng.toFixed(4));
//           setLat(map.current.getCenter().lat.toFixed(4));
//           setZoom(map.current.getZoom().toFixed(2));
//         });
//     });

//     const geocoder = new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         marker: {
//         color: 'orange'
//         },
//         mapboxgl: mapboxgl
//     });
    
//     map.addControl(geocoder);

//     return(
//         <>
//             <div>
//                 <div className="sidebar">
//                 Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//             </div>
//             <div ref={mapContainer} className="map-container" />
//             </div>
//         </>
//     )
// }




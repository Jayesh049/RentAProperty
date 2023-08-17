'use client';

import L from "leaflet";
import { MapContainer , Marker , TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


/* if you know some error is displaying but that error is not true 
so you can use this comment */
// @ts-ignore

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    ShadowUrl: markerShadow.src,

})

// for expressing latitude and logitude
interface MapProps {
    /* we are using this as a number because we have to insert
       map lat and long */
    center?: number[]
}

const Map:React.FC<MapProps> = ({
    center
}) => {
    return (
    <MapContainer 
    // 51 , -0.09 is center of the map , we can choose any part of the map by own
        center={center as L.LatLngExpression || [51 , -0.09]}
        zoom={center ? 4: 2}
        scrollWheelZoom={false}
        className="h-[35vh] rounded-lg"
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"         
        />
        {center && (
            <Marker
            position={center as L.LatLngExpression}
            />
            )}
    </MapContainer>  );
}
 
export default Map;
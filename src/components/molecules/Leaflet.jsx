import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Leaflet = ({ latitude, longitude, office }) => {
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            scrollWheelZoom={false}
            className="w-[1000px] h-[600px]"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>{office}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Leaflet;

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Leaflet = ({ selectedCoords }) => {
  console.log("selectedCoords", selectedCoords);
  return (
    <>
      <MapContainer
        center={[selectedCoords.latitude, selectedCoords.longitude]}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[selectedCoords.latitude, selectedCoords.longitude]}>
          <Popup>
            Koordinat yang dipilih: [{selectedCoords.latitude},{" "}
            {selectedCoords.longitude}]
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Leaflet;

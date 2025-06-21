// src/components/CoverageMap.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Set custom marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Fly helper
const FlyTo = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 11, { duration: 1.5 });
  }
  return null;
};

const CoverageMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState();
  const [activeCoords, setActiveCoords] = useState();
  const [activeDistrict, setActiveDistrict] = useState();
  const dhaka = [23.8103, 90.4125];

  const handleSearch = (e) => {
    e.preventDefault();
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };

  return (
    <div className="w-full h-[500px] md:h-[700px] rounded-xl shadow-lg overflow-hidden relative">
      {/* SEARCH */}
      <form
        onSubmit={handleSearch}
        className="absolute z-10 top-4 flex justify-center w-full"
      >
        <input
          id="district-search"
          type="text"
          name="search"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter district name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-lime-600 rounded-r-lg py-2 px-4 text-white"
        >
          Search
        </button>
      </form>

      {/* MAP CONTAINER */}
      <MapContainer
        center={dhaka}
        zoom={7}
        scrollWheelZoom
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        />
        {serviceCenters.map(
          ({ district, latitude, longitude, covered_area }, i) => (
            <Marker key={i} position={[latitude, longitude]}>
              <Popup autoOpen={district === activeDistrict}>
                <div>
                  <h3>
                    <strong>{district}</strong>
                  </h3>
                  <p>{covered_area.join(", ")}</p>
                </div>
              </Popup>
            </Marker>
          )
        )}

        <FlyTo coords={activeCoords} />
      </MapContainer>
    </div>
  );
};

export default CoverageMap;

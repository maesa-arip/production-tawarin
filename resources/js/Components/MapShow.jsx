import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"]; // Declare libraries outside the component

const componentLabels = {
    postal_code: "Kode Pos",
    locality: "Desa",
    administrative_area_level_1: "Provinsi",
    administrative_area_level_2: "Kabupaten",
    administrative_area_level_3: "Kecamatan",
    administrative_area_level_4: "Desa",
    street_number: "Nomor",
    route: "Nama Jalan",
    country: "Negara",
};

const MapShow = ({ lat, lng }) => {
    const mapContainerStyle = {
        height: "400px",
        width: "100%",
        borderRadius: "5px",
    };
    const [defaultCenter, setDefaultCenter] = useState({
        lat: lat,
        lng: lng,
    });
    const [center, setCenter] = useState(defaultCenter);
    const [markerPosition, setMarkerPosition] = useState(center);
    const [locationDetails, setLocationDetails] = useState(null);
    const [addressComponents, setAddressComponents] = useState([]);

    useEffect(() => {
        const fetchLocationDetails = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBNK1CQXADYL_HfPkkPUsiBFsXpscVuf3s`
                );
                const data = await response.json();
                if (data.results.length > 0) {
                    setLocationDetails(data.results[0]);
                    if (data.results[0].address_components) {
                        const filteredComponents =
                            data.results[0].address_components.filter(
                                (component) =>
                                    !["postal_code"].includes(
                                        component.types[0]
                                    )
                            );
                        setAddressComponents(filteredComponents);
                    }
                }
            } catch (error) {
                console.error("Error fetching location details:", error);
            }
        };
        fetchLocationDetails();
    }, [lat, lng]);

    const getComponentLabel = (type) => {
        return componentLabels[type] || type;
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBNK1CQXADYL_HfPkkPUsiBFsXpscVuf3s"
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={markerPosition} />
            </GoogleMap>
            {locationDetails && (
                <div className="grid grid-cols-12 mt-4 text-left gap-x-6">
                    <div className="col-span-12">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Lokasi Otomatis
                        </label>
                        <div className="flex rounded-md">
                            <input
                                type="text"
                                name="formattedAddress"
                                value={locationDetails.formatted_address}
                                readOnly
                                className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    {addressComponents.length > 0 && (
                        <>
                            {addressComponents.map((component) => (
                                <div className="col-span-12 md:col-span-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {getComponentLabel(component.types[0])}
                                    </label>
                                    <div className="flex rounded-md">
                                        <input
                                            type="text"
                                            value={component.long_name}
                                            readOnly
                                            className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </LoadScript>
    );
};

export default MapShow;

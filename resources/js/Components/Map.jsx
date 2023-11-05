import React, { useState, useRef, useEffect } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    Autocomplete,
} from "@react-google-maps/api";
import { useForm } from "@inertiajs/inertia-react";

const libraries = ["places"]; // Declare libraries outside the component

const Map = ({ onLocationSelect, lat, lng }) => {
    const mapContainerStyle = {
        height: "400px",
        width: "100%",
        borderRadius: "5px",
    };

    const [defaultCenter, setDefaultCenter] = useState({
        lat: lat || -8.670458, // Default latitude (Denpasar, Bali) or lat from props
        lng: lng || 115.212629, // Default longitude (Denpasar, Bali) or lng from props
    });

    const [center, setCenter] = useState(defaultCenter);
    const [markerPosition, setMarkerPosition] = useState(center);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const autocompleteRef = useRef(null); // Ref to store Autocomplete instance

    const [locationDetails, setLocationDetails] = useState({
        formattedAddress: "",
        street: "",
        village: "",
        subdistrict: "",
        district: "",
        regency: "",
        country: "",
    });

    const processSelectedLocation = (location) => {
        if (location) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location }, (results, status) => {
                if (status === "OK" && results.length > 0) {
                    const addressComponents = results[0].address_components;
                    let formattedAddress = "";

                    const updatedLocationDetails = {
                        formattedAddress,
                        street: "",
                        route: "",
                        village: "",
                        subdistrict: "",
                        district: "",
                        regency: "",
                        country: "",
                    };

                    for (let i = 0; i < addressComponents.length; i++) {
                        const types = addressComponents[i].types;
                        const longName = addressComponents[i].long_name;

                        if (types.includes("street_number")) {
                            updatedLocationDetails.street += longName;
                        } else if (types.includes("route")) {
                            updatedLocationDetails.route += ` ${longName}`;
                        } else if (
                            types.includes("administrative_area_level_4")
                        ) {
                            updatedLocationDetails.village = longName;
                        } else if (
                            types.includes("administrative_area_level_3")
                        ) {
                            updatedLocationDetails.subdistrict = longName;
                        } else if (
                            types.includes("administrative_area_level_2")
                        ) {
                            updatedLocationDetails.district = longName;
                        } else if (
                            types.includes("administrative_area_level_1")
                        ) {
                            updatedLocationDetails.regency = longName;
                        } else if (types.includes("country")) {
                            updatedLocationDetails.country = longName;
                        }
                    }

                    formattedAddress = results[0].formatted_address;

                    setLocationDetails({
                        formattedAddress,
                        ...updatedLocationDetails,
                    });
                    onLocationSelect({
                        location,
                        updatedLocationDetails,
                        formattedAddress,
                    });
                    // console.log(location)
                    // console.log(updatedLocationDetails)
                    // console.log(formattedAddress)
                }
            });
        } else {
            console.log("Please select a location on the map.");
        }
    };

    const handleMapClick = (event) => {
        const { lat, lng } = event.latLng;
        setMarkerPosition({ lat: lat(), lng: lng() });
        setSelectedLocation({ lat: lat(), lng: lng() });
        processSelectedLocation({ lat: lat(), lng: lng() });
        // console.log("Selected location:", lat(), lng());
    };

    const handleMarkerDrag = (event) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        setMarkerPosition({ lat, lng });
        setSelectedLocation({ lat, lng });
        processSelectedLocation({ lat, lng });
    };

    const handlePlaceSelect = () => {
        const place = autocompleteRef.current.getPlace();
        if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setCenter({ lat, lng });
            setMarkerPosition({ lat, lng });
            setSelectedLocation({ lat, lng });
            processSelectedLocation({ lat, lng });
        }
    };


    return (
        <LoadScript
            // googleMapsApiKey="AIzaSyBNK1CQXADYL_HfPkkPUsiBFsXpscVuf3s"
            googleMapsApiKey="AIzaSyD567-DpJKRVZMv0uWbHNqj_dp8qlMySSE"
            libraries={libraries}
        >
            <Autocomplete
                onLoad={(autocomplete) =>
                    (autocompleteRef.current = autocomplete)
                }
                onPlaceChanged={handlePlaceSelect}
            >
                <input
                    type="text"
                    className="block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search location"
                />
            </Autocomplete>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                onClick={handleMapClick}
            >
                <Marker
                    position={markerPosition}
                    draggable={true}
                    onDragEnd={handleMarkerDrag}
                    onClick={() => setSelectedLocation(markerPosition)}
                />
            </GoogleMap>
            <div className="flex justify-center mt-4 text-sm text-gray-600">
                <div className="relative px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute justify-center inline mr-3 -mt-1 text-center text-white rounded-full w-7 h-7 -left-3 -top-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={12} cy={12} r={9} />
                        <line x1={12} y1={8} x2="12.01" y2={8} />
                        <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                    <p className="text-justify">Pilih atau geser titik di Google Maps, Lokasi akan langsung
                    muncul dibawah. Yang bisa di edit hanya nama jalan, selain
                    itu otomatis akan diisi oleh Google Maps. Silakan gunakan
                    fitur Search Location untuk memudahkan mencari lokasi.</p>
                    
                </div>
            </div>
        </LoadScript>
    );
};

export default Map;

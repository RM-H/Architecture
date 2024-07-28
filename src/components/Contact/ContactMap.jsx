import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useRef} from "react";

const ContactMap = () => {
    const mapRef = useRef();

    let data = [34.5244, 51.0552];
    const position = [35.69, 51.38];
    return (
        <>

            <div className='column is-12 mt-5 container shadowone borderclrsix borderradtwo' style={{height: '16.18rem'}}>


                <MapContainer ref={mapRef} className='shadowtwo' center={position} zoom={11.6} scrollWheelZoom={false}
                              style={{height: '100%', borderRadius: '0.9rem'}}>
                    <TileLayer

                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup className=''>
                            {data}
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>


        </>
    )
}
export default ContactMap;
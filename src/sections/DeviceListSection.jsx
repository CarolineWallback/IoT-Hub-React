import React, { useEffect } from "react";
import { useDeviceContext } from "../contexts/DeviceContext";
import DeviceComponent from "../components/DeviceComponent";

const DeviceListSection = () => {
    const {devices, getDevicesAsync} = useDeviceContext()

    useEffect(() => {
        getDevicesAsync()
    }, [])

    return(
        <div className="container text-center cards-columns">
            {
                devices.map(device => (<DeviceComponent key={device.DeviceId} item={device}/>))
            }
        </div>
    )
}

export default DeviceListSection
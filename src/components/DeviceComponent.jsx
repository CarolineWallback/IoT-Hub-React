import React, { useEffect, useState } from "react";
import { useDeviceContext } from "../contexts/DeviceContext";
import '../custom.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb} from "@fortawesome/free-solid-svg-icons";


const DeviceComponent = ({item}) => {

    const {invokeMethod, invokeMethodAsync, setInvokeMethod} = useDeviceContext()

    const sendInvokeMethod = async () => {
        setInvokeMethod({deviceId: item.DeviceId, methodName: item.LightState ? "off" : "off", payload: '{}'})
        console.log(invokeMethod);
        invokeMethodAsync()
    }

    return(
        <div className="card p-1 device-card text-center">
            <div className="card-body">
                <h5 className="card-title">{item.DeviceId}</h5>
                <FontAwesomeIcon icon={faLightbulb} className="icon m-3" />
            </div>
            <div className="form-check form-switch">
                <div className="connection-dot" style={item.ConnectionState === "Connected" ? {"backgroundColor" : "green"} : {"backgroundColor" : "grey"}}></div>
                {item.ConnectionState === "Connected" ? 
                <input className="form-check-input" type="checkbox" checked={item.LightState} onChange={sendInvokeMethod}></input> : 
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled></input>}

            </div>
        </div>  
    )
}

export default DeviceComponent
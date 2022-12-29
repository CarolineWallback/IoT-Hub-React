import React from "react";
import { useDeviceContext } from "../contexts/DeviceContext";
import '../custom.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";


const DeviceComponent = ({item}) => {

    const {invokeMethod, invokeMethodAsync, setInvokeMethod} = useDeviceContext()
    // const {methodName, setMethodName} = useState("off")

    const sendInvokeMethod = async () => {
        setInvokeMethod({deviceId: item.DeviceId, methodName: 'on', payload: '{}'})
        console.log(invokeMethod);
        invokeMethodAsync()
    }

    return(

        <div className="card device-card text-center">
            <div className="card-body">
                <h5 className="card-title">{item.DeviceId}</h5>
                <FontAwesomeIcon icon={faLightbulb} className="icon" />
            </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={sendInvokeMethod}></input>
                </div>
        </div>  
    )
}

export default DeviceComponent
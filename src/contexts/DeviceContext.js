const {createContext, useContext, useState} = require("react");

const DeviceContext = createContext()
export const useDeviceContext = () => {
    return useContext(DeviceContext)
}

export const DeviceProvider = ({children}) => {

    const default_invoke = { deviceId: '', methodName: '', payload: '{}'}
    const baseUrl = 'https://lektion4-fa.azurewebsites.net/api/devices'
    const [devices, setDevices] = useState([])
    const [invokeMethod, setInvokeMethod] = useState({default_invoke})

    const getDevicesAsync = async () => {
        const result = await fetch(baseUrl + '?code=cbtIo3oEaIz8xkbQEEK-WjizK8Rx8c6yUWZ_E1iSTg_IAzFushJLgw==')
        setDevices(await result.json())
    }

    const invokeMethodAsync = async () => {
        await fetch(baseUrl + '/invoke?code=C6ekWslmm2CwTYHqDz0UQwzKNyOv9WXf-ql34yc3Si8VAzFu_pc5Og==', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(invokeMethod)
        })

        // return await result.json();
    }

    return <DeviceContext.Provider value={{devices, invokeMethod, setInvokeMethod, getDevicesAsync, invokeMethodAsync}}>
        {children}
    </DeviceContext.Provider>
}
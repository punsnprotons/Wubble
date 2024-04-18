import {useEffect, useState} from "react"

function useDebouce<T>(value:T, delay?: number):T{
    const [debouncedValue, setDeboucedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setDeboucedValue(value)
        },delay || 500)

        return () =>{
            clearTimeout(timer)
        }

    },[value,delay])

    return debouncedValue

}

export default useDebouce;
import { useState } from "react"



const useClickBoard =() => {

    const [copy, setCopy] =useState (false)

    const makeCopy =(value) => {
        if(typeof value === "string" || typeof value === "number") {
            navigator.clipboard.writeText(value)
            setCopy(true)

        } else {
            console.log("invalid value");
            
            setCopy(false)
        }

    }


    return {makeCopy, copy}

}

export default useClickBoard;
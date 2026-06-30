import { useEffect, useState } from "react"

const useWindowResize = () => {

    const [width, setWidth] = useState(Window.innerWidth)
    const [height, setHeigh] = useState(window.innerHeight)

    useEffect (() => {
        const handleResize =() => {
            setWidth(window.innerWidth)
            setHeigh(window.innerHeight)

        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
 
    }, [])

    return {width, height}

}

export default useWindowResize 
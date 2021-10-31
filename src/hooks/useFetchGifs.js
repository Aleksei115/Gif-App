import { useEffect, useState } from "react"
import getFetchGifs from "../helpers/getFetchGifs"

// rafc functional component


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getFetchGifs( category )
            .then( response => { setState ({data: response, loading:false})})
    },[category])

    return state    //{ data , loading}

}

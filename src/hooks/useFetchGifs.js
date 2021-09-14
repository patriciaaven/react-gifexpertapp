
import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading : true
    });

    useEffect( () => { //los efectos no puede ser async

       getGifs(category) //como es una promesa
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        })

    }, [category])

    return state; //data: [], loading: true
}
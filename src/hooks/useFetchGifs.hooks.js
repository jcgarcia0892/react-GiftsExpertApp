import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts.helper";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({data: [], loading: true});
    useEffect(() => {
        getGifts(category).then((images) => {
            setTimeout(() => {
                console.log(images);
                setState({
                    data: images,
                    loading: false
                });
            }, 3000);
        })
    }, [category]);
    
    return state;
};
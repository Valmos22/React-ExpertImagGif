import { useEffect, useState } from 'react';
import { getGif } from '../componentes/helpers/GetGif';


export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGif(categoria)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })
    }, [categoria])


    return state;
}

export default useFetchGifs;

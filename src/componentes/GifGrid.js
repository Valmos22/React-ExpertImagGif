import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItems from './GifGridItems';

export const GifGrid = ({ categoria }) => {

    const { data:imagenes, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3>{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    imagenes.map((img) =>
                        <GifGridItems
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}

export default GifGrid;

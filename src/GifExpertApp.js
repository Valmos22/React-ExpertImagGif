import React, { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';

// api = FViLzkRJ35V0C4xfqYgYedbDAsJCsNad
export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Push Man']);

    return (
        <>
            <h1>ExpertImagGif</h1>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            {
                categorias.map(category =>
                    <GifGrid
                        key={category}
                        categoria={category}
                    />
                )
            }
        </>
    )
}

export default GifExpertApp;
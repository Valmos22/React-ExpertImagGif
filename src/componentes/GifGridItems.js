import React from 'react';

export const GifGridItems = ({ id, title, url }) => {
    console.log({ id, title, url })
    return (
        <div className="card">
            <img src={url} alt={title} />
            {/* <p>{title}</p> */}
        </div>
    );
}
export default GifGridItems;

import React from 'react';
const Tile = ({img, title, children}) => {
    if (!img){
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )}
    else{
        return (
            <section>
                <img src={img} alt={title}/>
            </section>
        )}
}
export default Tile
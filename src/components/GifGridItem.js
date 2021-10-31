import React from "react";


const GifGridItem = ({ title, img }) => {

    return(
        <div className = {'gifCard'}>
            <img src={img} alt={title} className={'imgGif'}/>
        </div>
    )

}

export default GifGridItem;
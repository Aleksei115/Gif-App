import React from "react";
import GifGridItem from "./GifGridItem";
import Box from '@mui/material/Box';
import Mansory from '@mui/lab/Masonry';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { data , loading } = useFetchGifs(category);

    return (
        <div>
            <div >
                <h3 className={'titleCateogory'}>{category}</h3>
            </div>
            { loading && <p>Loading</p>}
            <Box>
                <Mansory columns={3} spacing={1}>
                    {
                        data.map( ( img ) => {
                            return (
                                <GifGridItem 
                                    key = { img.id }
                                    { ...img }                                     //Paso las pops desestructuradas desde aqui
                                />
                            )
                        })
                    }
                </Mansory>
            </Box>

        </div>
    )
}











    // Si la categoria cambia se vuelve a lanzar el useEffect pero
    // En este caso no pasa porque la categoria es constante
    // El efecto se implementa solo si la categoria cambia, no hace que caiga en ciclos infinitos
    // useEffect( () => {
    //     getGifs(category)
    //         .then( setImages )
    // },[ category ])

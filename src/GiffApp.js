import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'
import './index.css'

export const GifApp = () => {

    const [categories, setCategories] = useState(['Carnage'])

    return (
        <div>
            <h2 className={'titleApp'}>Gif-App</h2>
            <hr/>

            <AddCategory setCategory={ setCategories }/>
            <div>
                {
                    categories.map( ( category ) =>{ 
                        return(
                            <GifGrid 
                                key = {category}
                                category = { category }
                            />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
  
}
  
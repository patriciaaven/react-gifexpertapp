import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Club57', 'The Loud House', 'The Casagrande']; // solo se hace de esta manera si el arreglo nunca cambia
    const [categories, setCategories] = useState(['Gumball']);

    // const handleAdd = () =>{ {/**Agregar un nuevo elemento al arreglo */}
    //     setCategories( [...categories, 'Gunball']); //mantengo las categorias viejas y agrego una nueva

    //     //haciendolo de otra forma
    //     //setCategories(cat => [...cat, 'Gunball']);


    // }

    return (
        <>
          <h2>GifExpertApp</h2> 
          <AddCategory setCategories = {setCategories} />  {/**Para poder manejarlo en AddCategory */}
          <hr />

          {/**<button onClick= {handleAdd}>Agregar</button>*/}

            {/**MOSTRANDO EL ARREGLO DE CATEGORIAS */}
            <ol>
                {   
                    /**Barrer los elementos del arreglo y retornar el necesario */
                    categories.map( category => (
                        //return <li key={category}>{category}</li>
                        
                        /**Agregar elementos a la lista */
                        <GifGrid 
                            key = {category} 
                            category={category} 
                        />
                    ))
                }
            </ol>

        </>
    )
}


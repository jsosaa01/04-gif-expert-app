import { useState } from "react"
import { AddCategories, GifGrid } from "./components";

export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState( [ 'One Punch' ] );

    const onAddCategory = ( newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategories onNewCategory = { onAddCategory }/>

        {
            categories.map( category => (
                    <GifGrid 
                        key={ category } category = { category }
                    />
                )
            )
        }
    </>
  )
}

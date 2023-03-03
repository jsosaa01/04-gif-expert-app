import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsItems } from './GifsItems';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>
            { isLoading && (<h2>Cargando...</h2> ) }
            <div className="card-grid">
            { 
                images.map( ( img ) => (
                    <GifsItems 
                        key={ img.id }
                        { ...img }
                        
                    />
                ))
            }
            </div>
        </>
    );
};
